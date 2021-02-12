import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";
import { Auth } from "./app.auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(public auth: Auth){};

  canActivate(): boolean{
    return this.auth.autenticado();
  }

}