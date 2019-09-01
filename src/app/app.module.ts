import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RatingStreamComponent } from './rating-stream/rating-stream.component';
import { RouterModule } from '@angular/router';
import { RatingSubmitComponent } from './rating-submit/rating-submit.component';
import { AppRoutingModule } from './app-routing.module';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    RatingStreamComponent,
    RatingSubmitComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
