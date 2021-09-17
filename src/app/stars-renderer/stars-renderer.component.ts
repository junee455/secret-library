import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-stars-renderer',
  templateUrl: './stars-renderer.component.html',
  styleUrls: ['./stars-renderer.component.scss'],
})
export class StarsRendererComponent {
  public cellValue: string = '';

  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params);
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams) {
    // set value into cell again
    this.cellValue = this.getValueToDisplay(params);
  }

  getValueToDisplay(params: ICellRendererParams) {
    const rating = Math.round(Number(params.value));
    return Array(rating).fill('★').join(' ');
  }
  constructor() {}
}
