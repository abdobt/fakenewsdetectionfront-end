import { Component, OnInit } from '@angular/core';
import {NlpserviceService} from '../nlpservice.service'
@Component({
  selector: 'app-nlp',
  templateUrl: './nlp.component.html',
  styleUrls: ['./nlp.component.css']
})
export class NLPComponent implements OnInit {
text:any='';
resultat:any='';
  constructor(private nls: NlpserviceService) { }

  ngOnInit(): void {
  }
clk()
{
  let resp=this.nls.stopwords(this.text);
  resp.subscribe(
    // data=>console.log("Token : "+data)
    (data) => {                           //Next callback
     var obj = JSON.parse(data.toString());
     this.resultat=obj.stopwords;
   },
   (error) => {                              //Error callback
     console.error('error caught in component')
     //throw error;   //You can also throw the error to a global error handler
   }
   );
}
clk2()
{
  let resp=this.nls.token(this.text);
  resp.subscribe(
    // data=>console.log("Token : "+data)
    (data) => {                           //Next callback
     var obj = JSON.parse(data.toString());
     this.resultat=obj.tokeniz;
   },
   (error) => {                              //Error callback
     console.error('error caught in component')
     //throw error;   //You can also throw the error to a global error handler
   }
   );
}
clk3()
{
  let resp=this.nls.stem(this.text);
  resp.subscribe(
    // data=>console.log("Token : "+data)
    (data) => {                           //Next callback
     var obj = JSON.parse(data.toString());
     this.resultat=obj.stem;
   },
   (error) => {                              //Error callback
     console.error('error caught in component')
     //throw error;   //You can also throw the error to a global error handler
   }
   );
}
clk4()
{
  let resp=this.nls.lem(this.text);
  resp.subscribe(
    // data=>console.log("Token : "+data)
    (data) => {                           //Next callback
     var obj = JSON.parse(data.toString());
     this.resultat=obj.lem;
   },
   (error) => {                              //Error callback
     console.error('error caught in component')
     //throw error;   //You can also throw the error to a global error handler
   }
   );
}
clk5()
{
  let resp=this.nls.bg(this.text);
  resp.subscribe(
    // data=>console.log("Token : "+data)
    (data) => {                           //Next callback
     var obj = JSON.parse(data.toString());
     this.resultat=obj.bg;
   },
   (error) => {                              //Error callback
     console.error('error caught in component')
     //throw error;   //You can also throw the error to a global error handler
   }
   );
}
clk6()
{
  let resp=this.nls.tf(this.text);
  resp.subscribe(
    // data=>console.log("Token : "+data)
    (data) => {                           //Next callback
     var obj = JSON.parse(data.toString());
     this.resultat=obj.tf;
   },
   (error) => {                              //Error callback
     console.error('error caught in component')
     //throw error;   //You can also throw the error to a global error handler
   }
   );
}
clk7()
{
  let resp=this.nls.wv(this.text);
  resp.subscribe(
    // data=>console.log("Token : "+data)
    (data) => {                           //Next callback
     var obj = JSON.parse(data.toString());
     this.resultat=obj.wordv;
   },
   (error) => {                              //Error callback
     console.error('error caught in component')
     //throw error;   //You can also throw the error to a global error handler
   }
   );
}
}
