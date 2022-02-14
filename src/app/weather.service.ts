import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  /**responsavel por pegar clima e previsão respectivamente, usando a localização recebida, endereço
   * da API, e a chave obtida no openWeather
   */
  getCurrentWeather(loc: string) {
    return this.http.get(`${environment.apiUrl}/weather?q=${loc}&appid=${environment.apiKey}`)
  }

  getForecast(loc: string){
    return this.http.get(`${environment.apiUrl}/forecast?q=${loc}&appid=${environment.apiKey}`)
  }

}
