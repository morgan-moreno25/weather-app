import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WEATHER_API_KEY } from '../ENV';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  weatherData: Object;

  weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q='

  getWeather(city:String): Observable<Object> {
    let data = this.http.get(this.weatherURL + city + `&appid=${WEATHER_API_KEY}`);
    return data;
  }
  
}
