import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;

  constructor(
    private authService: AngularFireAuth,
    private router:Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.auth.signInWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        this.flashMessagesService.show('You are logged in', { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 4000 });
        this.router.navigate(['/login']);
      });
  }

}
