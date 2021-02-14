import { firebase } from '@firebase/app';
import '@firebase/database';
import '@firebase/storage';


export class Bd {
  
  public publicar(publicacao: any): void{

    let imageName = Date.now();
    firebase.storage().ref()
    .child(`imagens/${imageName}`)
    .put(publicacao.imagem);

    firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`).push({titulo: publicacao.titulo});
  }
}