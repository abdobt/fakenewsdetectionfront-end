import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SentimentserviceService {
  constructor(private http:HttpClient) {
  }
  public sentiment(text)
  {
    const headers=new HttpHeaders().set("content-type","application/x-www-form-urlencoded");
    headers.set("x-rapidapi-key","24f44e5e1amsh2c16115e3ddc3e4p1c4ddejsnfb9848493e18");
    headers.set("x-rapidapi-host","text-sentiment.p.rapidapi.com");
    headers.set("useQueryString","true");
    const headerDict = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-rapidapi-key': '24f44e5e1amsh2c16115e3ddc3e4p1c4ddejsnfb9848493e18',
      'x-rapidapi-host': 'text-sentiment.p.rapidapi.com'
    }

    let options = {
      headers: new HttpHeaders(headerDict)
    }
      var body = "text=" + text;
    return this.http.post('https://text-sentiment.p.rapidapi.com/analyze',body,{headers:new HttpHeaders(headerDict)});
  }
}
