import { Component, OnInit } from '@angular/core';
import {Rating} from '../model/rating';

@Component({
  selector: 'app-rating-submit',
  templateUrl: './rating-submit.component.html',
  styleUrls: ['./rating-submit.component.scss']
})
export class RatingSubmitComponent implements OnInit {

  model = new Rating(0, '');

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onRate($event: {newValue: number}) {
    this.model.rating = $event.newValue;
  }

  onSubmit() {
    this.submitted = true;
  }
}
