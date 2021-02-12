import { firebase } from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from "./usuario.model";

@Injectable()
export class Auth{

  public token_id: string;

  constructor(public router: Router){}

  public cadastrarUsuario(usuario: Usuario): Promise<any>{

    return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
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
      firebase.auth().currentUser.getIdToken()
      .then((token_id: string)=>{ //token_id -> jwt
        this.token_id = token_id;
        this.router.navigate(['/home']);
      })
    })
    .catch( (error: Error) =>{
      console.log(error);
    });


  }

}