import { Component, OnInit } from '@angular/core';
import { Tmanage } from '../../../models/Tmanage';
import { TmanageService } from '../../../service/tmanage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: string;
  times: Tmanage = {
    project: '',
    time: '',
    day: '',
    dayofweek: '',
    priority: ''
  };

  constructor(
    public timeService: TmanageService,
    public router: Router,
    public route: ActivatedRoute,
    public flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];

    // Get User
    this.timeService.getTime(this.id).subscribe(times => {
      this.times = times;
    });
  }

}
