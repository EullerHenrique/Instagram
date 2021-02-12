import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Auth } from '../../app.auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)
  });

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    public auth: Auth
  ) { }

  ngOnInit() {
  }

  public exibirPainelCadastro(): void{

    this.exibirPainel.emit('cadastro');

  }

  public autenticar(): void{
    
    this.auth.autenticar(

      this.form.value.email, 
      this.form.value.senha
    
    )

  }

}