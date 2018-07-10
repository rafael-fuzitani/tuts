// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = '4d280582b943f266ccb375d131b41095';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
  }

  getWeather(city,state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
      .map(res => res.json());
  }

}
