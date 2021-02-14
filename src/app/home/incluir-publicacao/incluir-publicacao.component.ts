import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Bd } from '../bd.service';
import { firebase } from '@firebase/app';
import '@firebase/auth';
import { Progresso } from '../progresso.service';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
  })
export class IncluirPublicacaoComponent implements OnInit {

  public email: string;
  public imagem: any;

  public form: FormGroup = new FormGroup({
    'titulo': new FormControl(null)
  });

  constructor(
    public bd: Bd,
    public progresso: Progresso  
  ) { }

  ngOnInit() {

    firebase.auth().onAuthStateChanged((user) => {

      this.email = user.email;

    })

  }

  public publicar(): void{

    this.bd.publicar({
      email: this.email,
      titulo: this.form.value.titulo,
      imagem: this.imagem[0]
    });


  }

  public prepararUpload(event: Event): void{

    this.imagem = (<HTMLInputElement>event.target).files;

  }

}