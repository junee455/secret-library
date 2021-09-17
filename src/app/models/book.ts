import { AccessLevel } from './user';

export interface Chapter {
  text?: string;
  name: string;
  rating: number;
  symbolsCount: number;
}

export interface Book {
  chapters?: Chapter[];
  name: string;
  description?: string;
  accessLevel?: AccessLevel;
  id: string;
}
