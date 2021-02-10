import { firebase } from '@firebase/app'
import '@firebase/auth'

import { Usuario } from "./usuario.model";

export class Auth{

  public cadastrarUsuario(usuario: Usuario){

    firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha).then((resposta: any) => {
      console.log(resposta);
    })
    .catch((error: Error) => {
      console.log(error);
    })

  }

}