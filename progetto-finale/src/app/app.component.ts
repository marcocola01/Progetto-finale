import { Component, OnInit } from '@angular/core';
import {Utenti} from "./registrazione/utenti";
import {LISTAUTENTI} from "./registrazione/mock-utenti";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'progetto-finale';
  vettUtenti : Utenti[] = LISTAUTENTI;
  ngOnInit()
  {
    
  }
  
}
