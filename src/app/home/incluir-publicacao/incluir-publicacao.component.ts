import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  public progressoPublicacao: string = 'Upload pendente';
  public porcentagemUpload: number;

  public form: FormGroup = new FormGroup({
    'titulo': new FormControl(null)
  });

  @Output() public atualizarTimeline: EventEmitter<any> = new EventEmitter<any>();

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


      this.porcentagemUpload = Math.round(this.progresso.status.bytesTransferred/this.progresso.status.totalBytes*100);


      if(this.progresso.msg_status === 'Upload concluido'){
       
        this.atualizarTimeline.emit();
        continuaUpload.next(false);
      }

      this.progressoPublicacao =  this.progresso.msg_status;

    })

  }

  public prepararUpload(event: Event): void{

    this.imagem = (<HTMLInputElement>event.target).files;

  }

}