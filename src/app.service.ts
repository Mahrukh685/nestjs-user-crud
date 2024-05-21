import { Injectable } from '@nestjs/common';
const users = [
  {
    id: 1,
    name: 'maha',
    age: 23,
  },
  {
    id: 2,
    name: 'aliza',
    age: 67,
  },
  {
    id: 3,
    name: 'hamza',
    age: 72,
  },
];
@Injectable()
export class AppService {
  getUsers() {
    return { data: users };
  }
}
