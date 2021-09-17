import { AccessLevel, User } from '../models/user';

interface MockUser extends User {
  password: string;
}

export const mockUsers: MockUser[] = [
  {
    name: 'john',
    password: '1234',
    accessLevel: AccessLevel.High,
    id: '1',
  },
  {
    name: 'anne',
    password: '5678',
    accessLevel: AccessLevel.Medium,
    id: '2',
  },
  {
    name: 'robert',
    password: '9111',
    accessLevel: AccessLevel.Medium,
    id: '3',
  },
  {
    name: 'paul',
    password: '1213',
    accessLevel: AccessLevel.Low,
    id: '4',
  },
];
