import { Component, OnInit } from '@angular/core';
import { Tmanage } from '../../../models/Tmanage';
import { TmanageService } from '../../../service/tmanage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-tmanage-details',
  templateUrl: './tmanage-details.component.html',
  styleUrls: ['./tmanage-details.component.css']
})
export class TmanageDetailsComponent implements OnInit {
  id: string;
  time: Tmanage;

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
      this.time = times;
    });
  }

  onDeleteClick(){
    if(confirm('Are you sure to delete?')) {
      this.timeService.deleteTime(this.id);
      this.flashMessagesService.show('Time Deleted!', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/'])
    }
  }

}
