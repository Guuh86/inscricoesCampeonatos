import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// FIREBASE //
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
// ******** //

// FORMULÁRIO //
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SucessoComponent } from './components/sucesso/sucesso.component';
import { InscricaoComponent } from './components/inscricao/inscricao.component';
// ********** //

@NgModule({
  declarations: [
    AppComponent,
    SucessoComponent,
    InscricaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
