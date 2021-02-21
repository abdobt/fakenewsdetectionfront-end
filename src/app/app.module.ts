import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NLPComponent } from './nlp/nlp.component';
import {HttpClientModule} from '@angular/common/http';
import { SentimentComponent } from './sentiment/sentiment.component';
import { HomeComponent } from './home/home.component';
import { FakenewsdetectionComponent } from './fakenewsdetection/fakenewsdetection.component';

@NgModule({
  declarations: [
    AppComponent,
    NLPComponent,
    SentimentComponent,
    HomeComponent,
    FakenewsdetectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
