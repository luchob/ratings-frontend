import {Component, OnInit} from '@angular/core';
import {delay, repeatWhen, retryWhen} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {Rating} from '../model/rating';
import {RatingService} from '../service/rating.service';

@Component({
  selector: 'app-rating-stream-poll',
  templateUrl: './rating-stream-poll.component.html',
  styleUrls: ['./rating-stream-poll.component.scss']
})
export class RatingStreamPollComponent implements OnInit {

  ratings: Array<Rating> = [];
  private subscriptions = new Subscription();

  constructor(private http: HttpClient, private ratingService: RatingService) {
  }

  ngOnInit() {
    this.subscriptions.add(
      this.ratingService.getRatings()
      .pipe(repeatWhen(completed => completed.pipe(delay(5000))))
      .pipe(retryWhen(errors => errors.pipe(delay(5000))))
      .subscribe(
        r => this.renderNewestRatings(r),
        error => console.error(error)
      ));
  }

  private renderNewestRatings(allRatings: Rating[]) {
    console.log('Add the new ratings to be rendered.');
    allRatings.forEach(receivedRating => {
        const ratingAlreadyExists = this.ratings.findIndex(existingRating => existingRating.id === receivedRating.id) > -1;
        if (!ratingAlreadyExists) {
          this.ratings.push(receivedRating);
        }
      }
    );
  }
}
