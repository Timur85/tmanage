import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';
import {SettingsService} from '../../service/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean;
  loggedInUser:string;
  showRegister:boolean;

  constructor(
    private authService: AngularFireAuth,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private settingService: SettingsService
  ) { }

  ngOnInit() {
    this.authService.authState.subscribe(auth => {
      if (auth && auth.uid) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }

      this.showRegister = this.settingService.getSettings().allowRegistration;
    });
  }

  onLogoutClick(){
    this.authService.auth.signOut();
    this.flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout:4000});
    this.router.navigate(['/login']);
  }
}
