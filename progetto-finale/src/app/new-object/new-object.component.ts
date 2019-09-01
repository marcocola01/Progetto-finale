import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Oggetti} from "./oggetti";

@Component({
  selector: 'app-new-object',
  templateUrl: './new-object.component.html',
  styleUrls: ['./new-object.component.css']
})
export class NewObjectComponent implements OnInit {

  @Input() vettOggetti;
  myForm: FormGroup;
  constructor(fb: FormBuilder) {


    this.myForm = fb.group({

      'auto': ['', Validators.required],
      'descrizione': ['', Validators.required],
      'kilometri': ['', Validators.required],
      'proprietario': ['', Validators.required],
      'anno': ['', Validators.required],

    });

  }

  ngOnInit() {
  }

 onSubmit(): void{
    console.log('auto:', this.myForm.controls['auto'].value);
    console.log('descrizione:', this.myForm.controls['descrizione'].value);
    console.log('kilometri:', this.myForm.controls['kilometri'].value);
    console.log('proprietario:', this.myForm.controls['proprietario'].value);
    console.log('prezzo:', this.myForm.controls['prezzo'].value);
    this.onSub();
  }

onSub(){
    let u = new Oggetti();
    u.auto = this.myForm.controls['auto'].value;
    u.descrizione = this.myForm.controls['descrizione'].value;
    u.kilometri = this.myForm.controls['kilometri'].value;
    u.proprietario = this.myForm.controls['proprietario'].value;
    u.prezzo = this.myForm.controls['prezzo'].value;

    this.vettOggetti.push(u);

  }

}
