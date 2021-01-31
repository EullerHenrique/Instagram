import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>();

  public form: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'nome_usuario': new FormControl(null),
    'senha': new FormControl(null)
  });

  constructor() { }

  ngOnInit() {
  }

  public exibirPainelLogin(): void{

    this.exibirPainel.emit('login');    

  }

  public cadastrarUsuario(): void{
    console.log(this.form);


    let usuario: Usuario = new Usuario(
      this.form.value.email,
      this.form.value.nome_completo,
      this.form.value.nome_usuario,
      this.form.value.senha
    )

  }

}