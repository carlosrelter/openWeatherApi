import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  /**funcionamento similar ao currentWeather(clima atual), usando um Observable pra pegar a variavel
   * de localização(cidade), variavel que sera usada pra definir o currentWeather e partir dela definir
   * o forecast(previsão)
   */
  loc$!: Observable<string>;
  loc!: string;
  forecast: any = <any>{};
  msg!: string;

  constructor(
    /**inicio no construtor o store e o service */
    private store: Store<any>,
    private weatherService: WeatherService
  ) {
    /**observable de localização enviado através de um pipe para localização, usando subscribe para,
     * variavel de localização, para que seja usada na busca
     */
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe(loc => {
      this.loc = loc;
      this.searchForecast(loc);
    })
  }

  ngOnInit(): void {
  }
/** usando a localização escrevo as resposta vindas da API em forecast(previsão)*/
searchForecast(loc: string){
  this.msg = '';
  this.forecast = {};
  this.weatherService.getForecast(loc)
    .subscribe(res => {
      this.forecast = res;
    })
}
/**função que verifica se existe respota da API  */
  resultFound(){
    return Object.keys(this.forecast).length >0;
  }

}
