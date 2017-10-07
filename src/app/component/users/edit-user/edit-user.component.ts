import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../../service/users.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../../../models/Users';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id: string;
  users: Users = {
    firstName:'',
    lastName: '',
    email:'',
    phone:''
  };

  constructor(
    public userService: UsersService,
    public router: Router,
    public route: ActivatedRoute,
    public flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];

    // Get User
    this.userService.getUser(this.id).subscribe(users => {
      this.users = users;
    });
  }

  onSubmit({value, valid}:{value: Users, valid: boolean}) {
    if(!valid) {
      this.flashMessagesService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['edit-user/' + this.id]);
    } else {
      // Update users
      this.userService.updateUser(this.id, value);
      this.flashMessagesService.show('Client Updated!', {cssClass: 'alert-success', timout: 4000});
      this.router.navigate(['/user/' + this.id]);
    }
  }

}
