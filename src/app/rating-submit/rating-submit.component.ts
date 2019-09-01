import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-submit',
  templateUrl: './rating-submit.component.html',
  styleUrls: ['./rating-submit.component.scss']
})
export class RatingSubmitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onRate($event: {newValue: number}) {
  }
}
