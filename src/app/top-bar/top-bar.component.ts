import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SET_LOCATION } from '../location-reducer';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  /**a barra superior usa o store para pegar a localização para o reduce, que será usado em ambos os
   * services, currentWeather(clima atual) e forecast(previsão)
   */
  loc!:string;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  /** realização do despacho de localização para os services, quem são responsaveis por obter dados da
   * API
   */
  search(searchForm: NgForm){
    if (searchForm.invalid){
      return;
    }
    this.store.dispatch({ type: SET_LOCATION, payload: this.loc });
  }

}
