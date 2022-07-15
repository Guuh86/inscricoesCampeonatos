import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CrudService } from '../../services/crud.service';
import { Jogador } from '../../interfaces/jogador';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent implements OnInit {
  public jogadorForm !: FormGroup;
  Jogador !: Jogador[];

  user !: Observable<any>;
  email!: string;
  msgError !: string;

  constructor(
    public crud: CrudService,
    public fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
    this.jogadorForms();
    this.user = this.auth.authState;
    let x = this.crud.getAll();
    x.snapshotChanges().subscribe(data => {
      this.Jogador = [];
      data.forEach(item => {
        let a: any = item.payload.toJSON();
        a['$key'] = item.key;
        this.Jogador.push(a as Jogador);
      })
    })
  }

  jogadorForms() {
    this.jogadorForm = this.fb.group({
      nome: ['',  Validators.minLength(3)],
      apelido: ['',  Validators.minLength(2)],
      data: ['', Validators.minLength(10)],
      email: ['', Validators.email],
      tel: ['', Validators.minLength(11)]
    })
  }

  async submit() {
    try {
      this.crud.add(this.jogadorForm.value);
      this.sendMail();
    } catch (error) {
      console.log(error)
      window.alert(error)
    } finally {
      this.jogadorForm.reset();
      console.log('Jogador registrado!');
      this.router.navigate(['/sucesso']);
    }
  }

  async sendMail(){
    const actionCodeSettings = {
      url: "https://intagram.com/stardancephb",
      handleCodeInApp: true
    }

    try {
      await this.auth.sendSignInLinkToEmail(
        this.email,
        actionCodeSettings
      )
    } catch (error) {
      console.log(error);
    } finally {
      return
    }
    
  }

}
