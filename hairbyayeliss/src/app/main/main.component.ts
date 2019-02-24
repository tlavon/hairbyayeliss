import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public appRules = false;
  constructor() { }

  ngOnInit() {
  }
  onClickMe() {
    this.appRules = true;
  }


}
