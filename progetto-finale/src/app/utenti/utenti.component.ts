import { Component, OnInit, Input } from '@angular/core';
import {Utenti} from "../registrazione/utenti";
@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {
  @Input() vettUtenti:Utenti[];
  constructor() { }

  ngOnInit() {
  }

}
