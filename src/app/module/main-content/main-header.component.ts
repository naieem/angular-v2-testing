import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  @Input() name: string;
  // name = 'sfd';
  constructor() {}

  ngOnInit() {}
  savebutton() {
    this.name = 'hello world';
  }
}
