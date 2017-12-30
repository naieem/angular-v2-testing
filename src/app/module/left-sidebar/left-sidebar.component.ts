import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {
  constructor() {
    console.log('inside constructor');
   }

  ngOnInit() {
    console.log('oninit');
  }

}
