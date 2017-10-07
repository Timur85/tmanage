import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Tmanage } from '../models/Tmanage';

@Injectable()
export class TmanageService {
  manages: FirebaseListObservable<any[]>;
  manage: FirebaseObjectObservable<any>;

  constructor(public af: AngularFireDatabase) {
    this.manages = this.af.list('/tmanage') as FirebaseListObservable<Tmanage[]>;
  }

  getTimes() {
    this.manages = this.af.list('/tmanage') as FirebaseListObservable<Tmanage[]>;
    return this.manages;
  }

  newTime(user: Tmanage) {
    this.manages.push(user);
  }

  getTime(id: string) {
    this.manage = this.af.object('/tmanage/' + id) as FirebaseObjectObservable<any>;
    return this.manage;
  }

  updateTime(id: string, user: Tmanage) {
    return this.manages.update(id, user);
  }

  deleteTime(id: string) {
    return this.manages.remove(id);
  }

}
