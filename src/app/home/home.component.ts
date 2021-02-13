import { Component, OnInit } from '@angular/core';
import { Auth } from '../app.auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: Auth) { }

  ngOnInit() {
  }

  public sair(): void{
    this.auth.sair();
  }

}