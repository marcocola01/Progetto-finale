import { Component, OnInit } from '@angular/core';
import {Utenti} from "./registrazione/utenti";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'progetto-finale';
  vettUtenti : Utenti[] = new Array<Utenti>(); 
  ngOnInit()
  {
    
  }
  
}
