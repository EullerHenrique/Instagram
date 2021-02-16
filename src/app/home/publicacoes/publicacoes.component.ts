import { Component, OnInit } from '@angular/core';
import { Bd } from '../bd.service';
import { firebase } from '@firebase/app';
import '@firebase/auth';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css'],
})
export class PublicacoesComponent implements OnInit {

  public email: string;
  public publicacoes: any;

  constructor(public bd: Bd) { }

  ngOnInit() {

    firebase.auth().onAuthStateChanged((user)=>{
      this.email=user.email;

      this.atualizarTimeline();
    }) 

  }

  public atualizarTimeline(): void{

    this.bd.consultarPublicacoes(this.email)
    .then((publicacoes) => {
        this.publicacoes = publicacoes;
    });

  }

}