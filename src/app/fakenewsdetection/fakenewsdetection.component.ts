import { Component, OnInit } from '@angular/core';
import { FakenewsService } from '../fakenews.service';

@Component({
  selector: 'app-fakenewsdetection',
  templateUrl: './fakenewsdetection.component.html',
  styleUrls: ['./fakenewsdetection.component.css']
})
export class FakenewsdetectionComponent implements OnInit {
text:any;
img;
  constructor(private service:FakenewsService) { }

  ngOnInit(): void {
  }
fk()
{
  this.img='';
  let resp=this.service.detect(this.text);
  resp.subscribe(
    // data=>console.log("Token : "+data)
    (data) => {                           //Next callback
     var obj = JSON.parse(data.toString());
      this.img="../../assets/"+obj.fakenewsdetection+".png";
   },
   (error) => {                              //Error callback
     console.error('error caught in component')
     //throw error;   //You can also throw the error to a global error handler
   }
   );
}
}
