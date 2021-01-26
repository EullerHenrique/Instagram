import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AcessoComponent } from './acesso/acesso.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AcessoComponent, BannerComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
