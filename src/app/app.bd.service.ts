import { firebase } from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';


export class Bd {
  
  public publicar(publicacao: any): void{
    firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`).push({titulo: publicacao.titulo})
  }
}