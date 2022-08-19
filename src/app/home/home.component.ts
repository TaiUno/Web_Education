import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  acc_img: any;
  img: string = '';
  constructor() { }

  ngOnInit(): void {
    this.acc_img = {
      "background-image": `url(${this.img || "../../assets/images/sportsman-icon.svg"})`
    }
  }

}
