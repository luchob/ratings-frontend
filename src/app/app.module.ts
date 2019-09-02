import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RatingStreamComponent } from './rating-stream/rating-stream.component';
import { RouterModule } from '@angular/router';
import { RatingSubmitComponent } from './rating-submit/rating-submit.component';
import { AppRoutingModule } from './app-routing.module';
import { RatingModule } from 'ng-starrating';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RatingViewComponent } from './rating-view/rating-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingStreamComponent,
    RatingSubmitComponent,
    RatingViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    RatingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
