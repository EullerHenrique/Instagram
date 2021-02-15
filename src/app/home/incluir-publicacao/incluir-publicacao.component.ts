import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Bd } from '../bd.service';
import { firebase } from '@firebase/app';
import '@firebase/auth';
import { Progresso } from '../progresso.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Rx';

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

    let acompanhaUpload = Observable.interval(1500);
    let continuaUpload = new Subject();
    continuaUpload.next(true);

    acompanhaUpload
      .takeUntil(continuaUpload)
      .subscribe(()=>{
      console.log(this.progresso.msg_status);
      console.log(this.progresso.status);

      if(this.progresso.status === 'Upload concluido'){
        continuaUpload.next(false);
      }


    })

  }

  public prepararUpload(event: Event): void{

    this.imagem = (<HTMLInputElement>event.target).files;

  }

}