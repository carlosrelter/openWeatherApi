import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  loc$!: Observable<string>;
  loc!:string;
/**através do observable store pra pegar a localização direto no construtor */
  constructor(private store:Store<any>) {
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe(loc => {
      this.loc = loc;
    })
   }

  ngOnInit(): void {
  }

}
