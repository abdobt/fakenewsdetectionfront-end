import { Component, OnInit } from '@angular/core';
import { SentimentserviceService } from '../sentimentservice.service';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit {
text:any;
pos:any;
neg:any;
mid:any;
  constructor(private service:SentimentserviceService) { }

  ngOnInit(): void {
  }
click()
{
  this.service.sentiment(this.text).subscribe(
    data=>{
this.pos=data['pos_percent'];
this.neg=data['neg_percent'];
this.mid=data['mid_percent'];},
    error=> {
      console.log(error);
    }
  )
}
}
