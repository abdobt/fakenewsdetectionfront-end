import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FakenewsdetectionComponent } from './fakenewsdetection/fakenewsdetection.component';
import { HomeComponent } from './home/home.component';
import { NLPComponent } from './nlp/nlp.component';
import { SentimentComponent } from './sentiment/sentiment.component';


const routes: Routes = [
  {
    path:'nlp',
    component:NLPComponent
  },
  {
    path:'sentimentanalysis',
    component:SentimentComponent
  },
  {
    path:'fakenewsdetection',
    component:FakenewsdetectionComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
