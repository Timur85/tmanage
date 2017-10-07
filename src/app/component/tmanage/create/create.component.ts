import { Component, OnInit } from '@angular/core';
import { Tmanage } from '../../../models/Tmanage';
import { TmanageService } from '../../../service/tmanage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  times: Tmanage = {
    project: '',
    time: '',
    day: '',
    dayofweek: '',
    priority: ''
  };

  dayofweek = [
    {id: 1, name: "Mon"},
    {id: 2, name: "Tue"},
    {id: 3, name: "Wed"},
    {id: 4, name: "Thu"},
    {id: 5, name: "Fri"},
    {id: 6, name: "Sat"},
  ];
  selectedValue = null;

  priorities = [
    {id: 1, pr: "Low"},
    {id: 2, pr: "Med"},
    {id: 3, pr: "High"}
  ];
  selectedPriority = null;

  constructor(
    public timeService: TmanageService,
    public router: Router,
    public route: ActivatedRoute,
    public flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}:{value: Tmanage, valid: boolean}) {
    if(!valid) {
      this.flashMessagesService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['addTime']);
    } else {
      // Add new time manage
      this.timeService.newTime(value);
      this.flashMessagesService.show('New time added!', {cssClass: 'alert-success', timout: 4000});
      this.router.navigate(['/']);
    }
  }

}
