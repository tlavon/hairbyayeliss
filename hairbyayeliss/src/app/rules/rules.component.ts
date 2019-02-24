import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  public link = '';
  public marked = false;
  public theCheckbox = false;
  constructor() { }

  ngOnInit() {
  }

  toggleEnable (e) {
    let ref = document.getElementById('book');
    if (e.target.checked) {
      ref.classList.remove('disabled-button');
      this.link = 'https://squareup.com/appointments/book/MMW92KVP91QNF/hairbyayeliss';
    } else {
      ref.classList.add('disabled-button');
      this.link = '';
    }
  }

}
