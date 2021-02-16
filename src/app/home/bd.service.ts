import { Injectable } from '@angular/core';
import { firebase } from '@firebase/app';
import '@firebase/database';
import '@firebase/storage';
import { Progresso } from './progresso.service';

@Injectable()
export class Bd {

  constructor(public progresso: Progresso){}
  
  public publicar(publicacao: any): void{

    let imageName;


    firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`).push({titulo: publicacao.titulo})
    .then((resposta: any) =>{

      let imageName = resposta.key;
      firebase.storage().ref()
      .child(`imagens/${imageName}`)
      .put(publicacao.imagem)
      .on(firebase.storage.TaskEvent.STATE_CHANGED,
        
        //Acompanha pogresso do upload
        (snapshot: any) => {
          this.progresso.msg_status = 'Upload em andamento';
          this.progresso.status = snapshot;
        },

        //Erro do upload
        (error) => {
          this.progresso.msg_status = 'Erro ao tentar fazer o upload';
        },
        
        //Finalização do upload
        () => {
          this.progresso.msg_status = 'Upload concluido';
        }
      )

    })
  
  }

  public consultaPublicacoes(emailUsuario: string): any{


    firebase.database().ref(`publicacoes/${btoa(emailUsuario)}`)
    .once('value')
    .then((snapshot)=> {
      
    })

    //.on() -> É um listener, ou seja, esse metódo executa uma consulta a cada vez que o dado em questão é modificado
    //.once -> Executa uma única consulta



  }
}