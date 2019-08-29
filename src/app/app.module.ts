import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RatingStreamComponent} from './rating-stream/rating-stream.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingStreamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
