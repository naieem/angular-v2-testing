import { Component, OnInit } from '@angular/core';
import { PeopleService } from './main-content-service';
@Component({
  selector: 'app-content',
  providers: [PeopleService],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  values = '';
  people = [];
  onKey(value: string) {
    this.values += value + ' | ';
  }
  constructor(public peopleService: PeopleService) {
    this.people = peopleService.getPeoples();
  }

  ngOnInit() {}
}
