export enum AccessLevel {
  High = 1,
  Medium = 2,
  Low = 3,
}

export interface User {
  name: string;
  id: string;
  accessLevel?: AccessLevel;
}
