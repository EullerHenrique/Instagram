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
        this.progresso.status = 'andamento';
        console.log(snapshot);
      },

      //Erro do upload
      (error) => {
        this.progresso.status = 'erro';
        console.log(error);
      },
      
      //Finalização do upload
      () => {
        this.progresso.status = 'concluido';
        console.log('upload completo');
      }
    )
    
    firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`).push({titulo: publicacao.titulo});
  }
}