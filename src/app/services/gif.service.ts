import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GIPHY_API_KEY } from '../ENV';


@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor(private http: HttpClient) { }

  giphyUrl = 'https://api.giphy.com/v1/gifs/random?tag=';

  getGif(condition:String): Observable<Object>{
    return this.http.get(this.giphyUrl + condition + `&api_key=${GIPHY_API_KEY}`)
  }
}
