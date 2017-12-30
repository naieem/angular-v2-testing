import { Component, OnInit } from '@angular/core';
import { PeopleService } from './main-content-service';
import { MainHeaderComponent } from './main-header.component';
@Component({
  selector: 'app-content',
  providers: [PeopleService],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  values = '';
  people: any[];
  name = 'sdfsd';
  constructor(public peopleService: PeopleService) {
    this.people = peopleService.getPeoples();
  }
  ngOnInit() {}
  clickEvent() {
    this.name = 'hello world';
  }
  onKey(value: string) {
    this.values += value + ' | ';
  }
}
