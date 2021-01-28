import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import { Image } from './image.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })),
      transition('escondido <=> visivel', animate ('2s ease-in')),
     ])
  ]
})
export class BannerComponent implements OnInit {
  
  public estado: string = 'escondido';

  public imagens: Image[] = [
    { estado: 'visivel' , url: 'https://user-images.githubusercontent.com/48317736/105919970-4d285280-6015-11eb-931b-a6d575198789.png'},
    { estado: 'escondido', url: 'https://user-images.githubusercontent.com/48317736/105919973-4e597f80-6015-11eb-9db8-b8f6965b8869.png'},
    { estado: 'escondido', url: 'https://user-images.githubusercontent.com/48317736/105919977-4ef21600-6015-11eb-8535-3b5a3874b79e.png'},
    { estado: 'escondido', url: 'https://user-images.githubusercontent.com/48317736/105919980-50234300-6015-11eb-9c95-e711c0c728e0.png'},
    { estado: 'escondido', url: 'https://user-images.githubusercontent.com/48317736/105919985-51547000-6015-11eb-99bd-73e7c8f39353.png'} 
  ]

  constructor() { }

  ngOnInit() {

    setTimeout(() => this.logicaRotacao(), 4000);

  }

  public logicaRotacao(): void{

    let idx: number;

    //Ocultar imagem

    for(let i: number = 0; i <= 4; i++){

      if(this.imagens[i].estado === 'visivel'){

        this.imagens[i].estado = 'escondido';

        idx = i === 4? 0: i + 1;

        break;

      }

    }

    //Exibir a próxima imagem

    this.imagens[idx].estado = 'visivel';



    
    setTimeout(() => this.logicaRotacao(), 4000);

  }

}