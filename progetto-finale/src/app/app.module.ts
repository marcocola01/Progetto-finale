import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { UtentiComponent } from './utenti/utenti.component';
import { SpaziocommentiComponent } from './spaziocommenti/spaziocommenti.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    UtentiComponent,
    SpaziocommentiComponent,
    RegistrazioneComponent,
    LoginComponent
  ],
  imports: [
   
    BrowserModule, NgbModule, FormsModule, ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
