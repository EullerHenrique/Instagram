import { firebase } from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

import { Usuario } from "./usuario.model";

export class Auth{

  public cadastrarUsuario(usuario: Usuario){

    firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then((resposta: any) => {

        console.log(resposta);

        delete usuario.senha;
      
        firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`).set(usuario);
        
        //btoa = Codifica uma string na base 64:

      })
      .catch((error: Error) => {

        console.log(error.message);

      })
      
  }


  public autenticar(email: string, senha: string): void{



    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then( (resposta: any) => {
      console.log(resposta);
    })
    .catch( (error: Error) =>{
      console.log(error);
    });


  }

}