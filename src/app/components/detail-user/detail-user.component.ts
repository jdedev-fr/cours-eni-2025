import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { IUser } from '../../interfaces/iuser';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail-user',
  imports: [RouterLink],
  templateUrl: './detail-user.component.html',
  styleUrl: './detail-user.component.scss'
})
export class DetailUserComponent implements OnInit {
  user: IUser | undefined = undefined
  constructor(private userService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get("id") || "0")
    this.user = this.userService.getUsers().find(u => u.id == id)
  }
}
