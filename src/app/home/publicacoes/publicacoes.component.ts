import { Component, OnInit } from '@angular/core';
import { Bd } from '../bd.service';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css'],
  providers: [ Bd ]
})
export class PublicacoesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}