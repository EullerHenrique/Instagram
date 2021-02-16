import { Component, OnInit, ViewChild } from '@angular/core';
import { Auth } from '../app.auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //O atributo publicacoes recebe o conteúdo do atributo publicacoes presente no componente filho incluir-publicação
  @ViewChild('publicacoes') public publicacoes: any;

  constructor(public auth: Auth) { }

  ngOnInit() {
  }

  public sair(): void{
    this.auth.sair();
  }

  public atualizarTimeline(): void{

    this.publicacoes.atualizarTimeline();

  }

}