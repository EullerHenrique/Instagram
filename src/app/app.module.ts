import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AcessoComponent } from './acesso/acesso.component';
import { BannerComponent } from './acesso/banner/banner.component';
import { LoginComponent } from './acesso/login/login.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Auth } from './acesso/auth.service';
import { HomeComponent } from './acesso/home/home.component';
import { PublicacoesComponent } from './acesso/publicacoes/publicacoes.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule,  ReactiveFormsModule ],
  declarations: [ AppComponent, AcessoComponent, BannerComponent, LoginComponent, CadastroComponent, HomeComponent, PublicacoesComponent ],
  providers: [ Auth ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
