import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  /**Obserbvable que fica respponsavel por pegar a localização, passar para variavel, que vai pegar o
   * que vai passa, para uma função pra pegar os dados da API em um variavel de tempo atual
   */
  loc$!: Observable<string>;
  loc!: string;
  currentWeather: any=<any>{};
  msg!: string;

  constructor(
    /**import do store, como forma de centralizar a pesquisa, usando a alteração
     * da variavel de localização(cidade), e importe do serviço para conexão com a API */
    private store: Store<any>,
    private weatherService: WeatherService
  ) {
    /**store é conduzido pelo pipe, selecionando a variavel de localização, como se trata de um observable
     * apenas, usa-se o subscribe para variavel local, que sera usada na busca
     */
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe(loc => {
      this.loc = loc;
      this.searchWeather(loc);
    })
  }

  ngOnInit(): void {
  }
  /**serviço de busca que usa o service pra pegar o resultado da API, e novamente o subscribe
   * pra passa-lo pra resposta como tempo atual */
  searchWeather(loc: string){
    this.msg = '';
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(loc)
      .subscribe(res => {
        this.currentWeather = res;
      })
  }

  /**funçaõ que sera usada pra saber os atributos do abjeto que foi trazido por Json, no caso
   * se existe algum resultado
   */
  resultFound(){
    return Object.keys(this.currentWeather).length >0;
  }

}
