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
    this.users = this.af.list('/users') as FirebaseListObservable<Users[]>;
    return this.users;
  }

  newUsers(user: Users) {
    this.users.push(user);
  }

  getUser(id: string) {
    this.user = this.af.object('/users/' + id) as FirebaseObjectObservable<any>;
    return this.user;
  }

  updateUser(id: string, user: Users) {
    return this.users.update(id, user);
  }

  deleteUser(id: string) {
    return this.users.remove(id);
  }


}
