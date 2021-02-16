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

  constructor(public bd: Bd) { }

  ngOnInit() {

    firebase.auth().onAuthStateChanged((user)=>{
      this.email=user.email;
    }) 

  }

  public atualizarTimeline(): void{

    this.bd.consultaPublicacoes(this.email);

  }

}