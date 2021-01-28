import { Component, OnInit } from '@angular/core';
import { transition, animate, trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [ 
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
    })),
    transition('void , => criado',
     [ style( {opacity: 0 } ),
       animate( '500ms 1s ease-in-out') //duração, delay e aceleração
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}