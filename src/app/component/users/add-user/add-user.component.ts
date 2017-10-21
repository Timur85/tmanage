import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UsersService } from '../../../service/users.service';
import { Router } from '@angular/router';
import { Users } from '../../../models/Users';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  users: Users = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    access: 0
  }

  access = [
    {id: 1, name: 'admin'},
    {id: 2, name: 'user'}
  ];
  selectedValue = null;

  constructor(
    public router: Router,
    public userService: UsersService,
    public flashMessagesService: FlashMessagesService
    ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Users, valid: boolean}) {
    if (!valid) {
      this.flashMessagesService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['addUser']);
    } else {
      // Add new users
      this.userService.newUsers(value);
      this.flashMessagesService.show('New Users added!', {cssClass: 'alert-success', timout: 4000});
      this.router.navigate(['/']);
    }
  }

}
