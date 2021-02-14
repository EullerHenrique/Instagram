import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AcessoComponent } from './acesso/acesso.component';
import { BannerComponent } from './acesso/banner/banner.component';
import { LoginComponent } from './acesso/login/login.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Auth } from './app.auth.service';
import { AuthGuard } from './app.auth.guard';
import { HomeComponent } from './home/home.component';
import { PublicacoesComponent } from './home/publicacoes/publicacoes.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { IncluirPublicacaoComponent } from './home/incluir-publicacao/incluir-publicacao.component';
import { Bd } from './home/bd.service';
import { Progresso } from './home/progresso.service';

@NgModule({
  imports:     
    [ 
      BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(ROUTES)
    ],
  declarations: 
    [
      AppComponent,
      AcessoComponent,
      BannerComponent,
      LoginComponent,
      CadastroComponent,
      HomeComponent,
      PublicacoesComponent,
      IncluirPublicacaoComponent 
    ],
  providers: 
    [
       Auth,
       AuthGuard,
       Bd,
       Progresso 
    ],
  bootstrap: 
    [ 
       AppComponent 
    ]
})
export class AppModule { }
