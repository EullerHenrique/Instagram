import { firebase } from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

import { Usuario } from "./usuario.model";

export class Auth{

  public cadastrarUsuario(usuario: Usuario){

    firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha).then((resposta: any) => {

      delete usuario.senha
      
      firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`).set({usuario}) 
      //btoa = Codifica uma string na base 64:
    })
    .catch((error: Error) => {
      console.log(error);
    })

  }

}