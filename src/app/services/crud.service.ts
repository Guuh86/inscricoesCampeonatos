import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from '@angular/fire/compat/database';
import { Jogador } from '../interfaces/jogador';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  jogadoresRef !: AngularFireList<any>;
  jogadorRef !: AngularFireObject<any>;  

  constructor(
    private db: AngularFireDatabase
  ) { }

  // Adicionar um jogador ao banco de dados

  add(jogador: Jogador){
    this.jogadoresRef.push({
      nome: jogador.nome,
      apelido: jogador.apelido,
      data: jogador.data,
      email: jogador.email,
      tel: jogador.tel
    })
  }

  // Obter um jogador específico do banco de dados pelo seu ID

  get(id: string){
    this.jogadorRef = this.db.object('jogadores/' + id);
    return this.jogadorRef;   
  }

  // Obter todos os jogadores do banco de dados

  getAll(){
    this.jogadoresRef = this.db.list('jogadores');
    return this.jogadoresRef;
  }

  // Atualizar um jogador específico do banco de dados

  update(jogador: Jogador){
    this.jogadorRef.update({
      nome: jogador.nome,
      apelido: jogador.apelido,
      data: jogador.data,
      email: jogador.email,
      tel: jogador.tel      
    })
  }

  // Apagar um jogador do banco de dados

  delete(id: string){
    this.jogadorRef = this.db.object('jogadores/' + id);
    this.jogadorRef.remove();
  }

}
