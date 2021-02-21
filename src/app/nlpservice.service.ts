import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NlpserviceService {

  constructor(private http:HttpClient) { }
  endpoint:string="http://127.0.0.1:5000/";
  public stopwords(text)
  {
    let f={
      query:"{stopwords(text:\""+text+"\")}"
    }
    return this.http.post(this.endpoint,f,{responseType: 'text' as 'json'});
  }
  public token(text)
  {
    let f={
      query:"{tokeniz(text:\""+text+"\")}"
    }
    return this.http.post(this.endpoint,f,{responseType: 'text' as 'json'});
  }
  public stem(text)
  {
    let f={
      query:"{stem(text:\""+text+"\")}"
    }
    return this.http.post(this.endpoint,f,{responseType: 'text' as 'json'});
  }
  public lem(text)
  {
    let f={
      query:"{lem(text:\""+text+"\")}"
    }
    return this.http.post(this.endpoint,f,{responseType: 'text' as 'json'});
  }
  public bg(text)
  {
    let f={
      query:"{bg(text:\""+text+"\")}"
    }
    return this.http.post(this.endpoint,f,{responseType: 'text' as 'json'});
  }
  public tf(text)
  {
    let f={
      query:"{tf(text:\""+text+"\")}"
    }
    return this.http.post(this.endpoint,f,{responseType: 'text' as 'json'});
  }
  public wv(text)
  {
    let f={
      query:"{wordv(text:\""+text+"\")}"
    }
    return this.http.post(this.endpoint,f,{responseType: 'text' as 'json'});
  }
}
