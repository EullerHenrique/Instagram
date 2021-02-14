import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Bd } from '../../app.bd.service';
import { firebase } from '@firebase/app';
import '@firebase/auth';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  public email: string;

  public form: FormGroup = new FormGroup({
    'titulo': new FormControl(null)
  });

  constructor(public bd: Bd) { }

  ngOnInit() {

    firebase.auth().onAuthStateChanged((user) => {

      this.email = user.email;

    })

  }

  public publicar(): void{

    this.bd.publicar({
      email: this.email,
      titulo: this.form.value.titulo
    });

  }

}