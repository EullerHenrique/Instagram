import { Component, OnInit } from '@angular/core';
import { transition, animate, trigger, state, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [ 
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
    })),
    transition('void  => criado',
     [ style( {opacity: 0, transform: 'translate(-50px,0) ' } ),
       animate( '500ms 0s') //duração, delay e aceleração
      ])
    ]),
     trigger('animacao-painel', [
      state('criado', style({
        opacity: 1
    })),
    transition('void  => criado',
     [ style( {opacity: 0, transform: 'translate(50px,0) ' } ),
       animate( '1.5s 0s', keyframes([ 
                                       // keyframes -> marcos/pontos de transformação da animação 
                                       //           -> diz respeito a como os valores dos atributos visuais da aimação serãp afetados durante a duração da animação 
                                       //offset -> Determina em que período temporalo keyframe será inserido na animação
            
                //0 VOID ------X---------------------X-X-X-X-X-X-X-X CRIADO 1.5s
            
                style({ offset: 0.33, opacity: 1, transform: 'translateX(0)'}),
                style({ offset: 0.86, opacity: 1, transform: 'translateX(0)'}),
                
                style({ offset: 0.88, opacity: 1, transform: 'translateY(-10px)'}),
                style({ offset: 0.90, opacity: 1, transform: 'translateY(10px)'}),

                style({ offset: 0.92, opacity: 1, transform: 'translateY(-10px)'}),
                style({ offset: 0.94, opacity: 1, transform: 'translateY(10px)'}),
                style({ offset: 0.96, opacity: 1, transform: 'translateY(-10px)'}),
                style({ offset: 0.98, opacity: 1, transform: 'translateY(10px)'}),

                style({ offset: 1, opacity: 1, transform: 'translateX(0)'})
      
       ])) //duração, delay e aceleração
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {

  public estadoBanner: string = 'criado';
  public estadoPainel: string = 'criado';

  public cadastro: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public exibirPainel(event: string): void{

    this.cadastro = event === 'cadastro'?true:false;

  }

  public inicioDaAnimacao():void{
    //console.log('inicio da animação');
  }

  public fimDaAnimacao():void{
    //console.log('fim da animação');
  }

}