import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakenewsService {
  endpoint:string="http://127.0.0.1:5000/";
  constructor(private http:HttpClient) { }
  public detect(text)
  {
    let f={
      query:"{fakenewsdetection(text:\""+text+"\")}"
    }
    return this.http.post(this.endpoint,f,{responseType: 'text' as 'json'});
  }
}
