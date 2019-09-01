import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RatingStreamComponent} from './rating-stream/rating-stream.component';
import {RatingSubmitComponent} from './rating-submit/rating-submit.component';

const routes: Routes = [
  // default entry
  {
    path: 'rating-stream',
    component: RatingStreamComponent
  },
  {
    path: 'rating-submit',
    component: RatingSubmitComponent
  },
  {
    path: '**',
    redirectTo: '/rating-submit',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
