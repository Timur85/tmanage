import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Users } from '../models/Users';

@Injectable()
export class UsersService {
  users: FirebaseListObservable<any[]>;
  user: FirebaseObjectObservable<any>;

  constructor(public af: AngularFireDatabase) {
    this.users = this.af.list('/users') as FirebaseListObservable<Users[]>;
  }

  getUsers() {
    return this.users;
  }
}
