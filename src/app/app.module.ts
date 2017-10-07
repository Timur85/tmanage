import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

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

// Services
import { UsersService } from './service/users.service';
import { AuthService } from './service/auth.service';
import { SettingsService } from './service/settings.service';
import { AuthGuard } from './guards/auth.guard';
import { RegisterGuard } from './guards/register.guard';
import { TmanageComponent } from './tmanage/tmanage.component';
import { CreateComponent } from './component/tmanage/create/create.component';
import { EditComponent } from './component/tmanage/edit/edit.component';
import { DeleteComponent } from './component/tmanage/delete/delete.component';
import { UpdateComponent } from './component/tmanage/update/update.component';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate:[RegisterGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'addUser', component: AddUserComponent, canActivate:[AuthGuard]},
  {path: 'user/:id', component: UsersDetailsComponent, canActivate:[AuthGuard]},
  {path: 'edit-user/:id', component: EditUserComponent, canActivate:[AuthGuard]},
  {path: 'settings', component: SettingsComponent, canActivate:[AuthGuard]},
  {path:'**', component:PageNotFoundComponent}
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
    PageNotFoundComponent,
    TmanageComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    UsersService,
    AuthService,
    AuthGuard,
    RegisterGuard,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
