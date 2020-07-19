import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { GifService } from '../../services/gif.service';


@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {

  city: String;
  name: String;
  temp: Number;
  low: Number;
  high: Number;
  clouds: Number;
  condition: String;
  gifString: String;
 

  constructor(
    private weatherService: WeatherService,
    private gifService: GifService,
  ) { }

  ngOnInit(): void {
    
  }

  private convertTemp(kelvin:number): Number{
    let fahrenheit = Math.floor((kelvin - 273.15) * (9/5) + 32);
    return fahrenheit;
  }

  getWeather(city:String): void {
    this.weatherService.getWeather(city)
      .subscribe(weather => {
        this.name = weather['name'];
        this.condition = weather['weather'][0].main;
        this.temp = this.convertTemp(weather['main'].temp)
        this.low = this.convertTemp(weather['main'].temp_min);
        this.high = this.convertTemp(weather['main'].temp_max);
        this.clouds = weather['clouds'].all;
      });

    this.gifService.getGif(this.condition)
      .subscribe(gif => {
        this.gifString = gif['data'].image_url
        console.log(gif['data']);
    });
  }

}
