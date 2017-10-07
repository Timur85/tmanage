import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../../service/users.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../../../models/Users';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  id: string;
  user: Users;

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
      this.user = users;
      console.log(this.user);
    });

  }

  onDeleteClick(){
    if(confirm('Are you sure to delete?')) {
      this.userService.deleteUser(this.id);
      this.flashMessagesService.show('User Deleted!', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/'])
    }
  }

}
