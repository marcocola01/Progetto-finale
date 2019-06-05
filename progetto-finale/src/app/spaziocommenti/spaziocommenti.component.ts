import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Annuncio} from "./annunci";
import {Utenti} from "../registrazione/utenti";
@Component({
  selector: 'app-spaziocommenti',
  templateUrl: './spaziocommenti.component.html',
  styleUrls: ['./spaziocommenti.component.css']
})
export class SpaziocommentiComponent implements OnInit {
miaForm: FormGroup;
@Input () lista;
@Input () utenteLoggato: Utenti;
errore: string;
  constructor(fb: FormBuilder) { }

  ngOnInit() {
  }
onAggiungiCommento(annuncio: Annuncio, commento: HTMLInputElement){

}
}
