import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Array<IUser> = [
    {
      id: 1,
      name: "Demettre",
      firstName: "Julien"
    },
    {
      id: 2,
      name: "Albin",
      firstName: "Mickael"
    }
  ]

  constructor() { }

  getUsers(): Array<IUser> {
    return this.users
  }
}
