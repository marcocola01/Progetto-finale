import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  myForm: FormGroup; 
  constructor(fb: FormBuilder) { 
    
    
    this.myForm = fb.group({
      
      'nome': ['', Validators.required],
      'cognome': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      
    });
    
  }
  ngOnInit(){
    
  }
  
  onSubmit(value: string): void{
    console.log('nome:', this.myForm.controls['nome'].value);
    console.log('cognome:', this.myForm.controls['cognome'].value);
    console.log('email:', this.myForm.controls['email'].value);
    console.log('password:', this.myForm.controls['password'].value);
    
  }
}




