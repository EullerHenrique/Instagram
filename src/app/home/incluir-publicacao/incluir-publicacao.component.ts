import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    'titulo': new FormControl(null)
  });

  constructor() { }

  ngOnInit() {
  }

  public publicar(): void{

    console.log('oioi');

  }

}