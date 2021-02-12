import { firebase } from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from "./app.user.model";


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
        localStorage.setItem('token_id',token_id);
        this.router.navigate(['/home']);
      })
    })
    .catch( (error: Error) =>{
      console.log(error);
    });


  };

  public autenticado(): boolean{

    if(this.token_id === undefined && localStorage.getItem('token_id') != null){
      
      this.token_id = localStorage.getItem('token_id');

    }

    return this.token_id !== undefined;

  }

}
/*

  Proteção de rotas

  Objetivo: Acessar a rota home somente se o usuário passar pelo processo de autentificação no firebase.

  Como fazer isso?

  1) Em autentificação.service, criar o atributo token_id para armazenar o retorno do método firebase.auth().currentUser.getIdToken() durante a execução do metódo autenticar().

  2) Navegar automaticamente para o path home após autenticação com sucesso no FIrebase.

  3) Criar um guarda de rota para permitir o acesso ao path home somente se autenticacao.service possuir o atributo token_id preenchido.

*/