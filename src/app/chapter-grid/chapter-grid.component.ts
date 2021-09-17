import { ViewportRuler } from '@angular/cdk/scrolling';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ColDef, GridApi, GridOptions } from 'ag-grid-community';
import { takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Book, Chapter } from '../models/book';
import { Router } from '@angular/router';
import { StarsRendererComponent } from '../stars-renderer/stars-renderer.component';

function getColDefs(): ColDef[] {
  return [
    { headerName: 'Chapter name', field: 'name', sortable: true },
    {
      field: 'rating',
      sortable: true,
      cellRendererFramework: StarsRendererComponent,
    },
    { headerName: 'Symbols count', field: 'symbolsCount', sortable: true },
  ];
}
@Component({
  selector: 'app-chapter-grid',
  templateUrl: './chapter-grid.component.html',
  styleUrls: ['./chapter-grid.component.scss'],
})
export class ChapterGridComponent implements OnInit, OnDestroy {
  private $destroy: Subject<void> = new Subject();

  @Input() book: Book | undefined;

  public colDef: ColDef[] = [];

  public gridOptions: GridOptions | undefined;

  private gridApi?: GridApi;

  constructor(
    private readonly viewportRuler: ViewportRuler,
    private router: Router
  ) {
    this.viewportRuler
      .change(200)
      .pipe(takeUntil(this.$destroy))
      .subscribe(() => this.gridApi?.sizeColumnsToFit());
  }

  ngOnInit(): void {
    this.colDef = getColDefs();
    this.gridOptions = <GridOptions>{
      columnDefs: this.colDef,
      onGridReady: (opt) => {
        this.gridApi = opt.api;
        opt.api.sizeColumnsToFit();
      },
      onRowClicked: (row) => {
        const book = this.book?.id;
        const chapter = row.data.name;
        this.router.navigate([`library/read/${book}/${chapter}`]);
      },
    };
  }

  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
