import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUser } from '../../interfaces/iuser';
import { UsersService } from '../../service/users.service';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-crud-user',
  imports: [FormsModule, TitleCasePipe, RouterLink],
  templateUrl: './crud-user.component.html',
  styleUrl: './crud-user.component.scss'
})
export class CrudUserComponent implements OnInit {

  users: Array<IUser> = []
  inpNom: string = ""
  inpPrenom: string = ""
  edit: number = 0

  constructor(private userService: UsersService, private router: Router) { }
  ngOnInit(): void {
    this.users = this.userService.getUsers()
  }
  getNextId(): number {
    const id: number = (this.users.length == 0) ? 1 : this.users[this.users.length - 1].id + 1;
    return id
  }
  validForm() {
    if (this.edit == 0) {
      const userTemp: IUser = {
        id: this.getNextId(),
        name: this.inpNom,
        firstName: this.inpPrenom
      }
      this.users.push(userTemp)
    } else {
      const index = this.users.findIndex(u => u.id == this.edit)
      if (index >= 0) {
        this.users[index] = {
          id: this.edit,
          name: this.inpNom,
          firstName: this.inpPrenom
        }
      }
    }
    this.edit = 0
  }
  deleteUser(user: IUser) {
    const index = this.users.findIndex(u => u.id == user.id)
    if (index >= 0) {
      this.users.splice(index, 1)
    }
  }
  modifUser(user: IUser) {
    this.edit = user.id
    this.inpNom = user.name
    this.inpPrenom = user.firstName
  }
  navPokeDex() {
    this.router.navigate(["/pokedex"])
  }
  navDetail(user: IUser) {
    this.router.navigate([`/detail-user/${user.id}`])
  }
}
