import { Injectable } from '@angular/core';
import { firebase } from '@firebase/app';
import '@firebase/database';
import '@firebase/storage';
import { Progresso } from './progresso.service';

@Injectable()
export class Bd {

  constructor(public progresso: Progresso){}
  
  public publicar(publicacao: any): void{

    let imageName = Date.now();
    firebase.storage().ref()
    .child(`imagens/${imageName}`)
    .put(publicacao.imagem)
    .on(firebase.storage.TaskEvent.STATE_CHANGED,
      
      //Acompanha pogresso do upload
      (snapshot: any) => {
        this.progresso.msg_status = 'andamento';
        this.progresso.status = snapshot;
      },

      //Erro do upload
      (error) => {
        this.progresso.msg_status = 'erro';
      },
      
      //Finalização do upload
      () => {
        this.progresso.msg_status = 'concluido';
      }
    )
    
    firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`).push({titulo: publicacao.titulo});
  }
}