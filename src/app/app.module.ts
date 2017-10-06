import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// AngularFire module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
// Components import
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UsersComponent } from './component/users/users.component';
import { UsersDetailsComponent } from './component/users-details/users-details.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { SettingsComponent } from './component/settings/settings.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { UsersService } from './service/users.service';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
];

export const firebaseConfig = {
  apiKey: 'AIzaSyA-HJwkFZwVJaVzPtqh80aKavDjlwBHexw',
  authDomain: 'clientpanel-17bd9.firebaseapp.com',
  databaseURL: 'https://clientpanel-17bd9.firebaseio.com',
  storageBucket: 'clientpanel-17bd9.appspot.com',
  messagingSenderId: '41874500312'
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    UsersDetailsComponent,
    AddUserComponent,
    EditUserComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
