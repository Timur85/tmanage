import { Component, OnInit } from '@angular/core';
import {TmanageService} from '../../service/tmanage.service';

@Component({
  selector: 'app-tmanage',
  templateUrl: './tmanage.component.html',
  styleUrls: ['./tmanage.component.css']
})
export class TmanageComponent implements OnInit {
  times: any[];

  constructor(private tmanageService: TmanageService) { }

  ngOnInit() {
    this.tmanageService.getTimes().subscribe(time => {
      this.times = time;
    });
  }

}
