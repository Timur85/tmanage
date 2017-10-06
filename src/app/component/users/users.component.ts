import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Users } from '../../models/Users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Users[];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
        this.users = users;
        console.log(users);
    });
  }

}
