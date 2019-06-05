import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Utenti} from "../registrazione/utenti";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Input() vettUtenti : Utenti[];
@Input() utenteLoggato : Utenti;
  myForm: FormGroup;
  constructor(fb: FormBuilder) {

    this.myForm = fb.group({

      'nomeinput': ['', Validators.required],
      'passwordinput': ['', Validators.required],


    });

  }
onLogin(){
    if(this.myForm.valid == true){
        for(let i = 0; i < this.vettUtenti.length; i ++){
            if((this.myForm['nomeinput'] == this.vettUtenti[i].nome) && this.myForm['passwordinput'] == this.vettUtenti[i].password){
                this.utenteLoggato.nome = this.vettUtenti[i].nome;
                this.utenteLoggato.password = this.vettUtenti[i].password;
            }
        }
    }
}
  ngOnInit() {
  }

}
