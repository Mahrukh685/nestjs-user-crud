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
  getUsersbyId(id) {
    let myuser;
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == id) {
        myuser = users[i];
      }
    }
    return { data: myuser };
  }

  createUser(name, age) {
    users.push({name,age,id:Math.random()});
    return {data:"user has been created"}
  }


}
