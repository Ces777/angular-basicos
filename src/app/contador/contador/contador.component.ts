import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template:`
    <h1>{{title}}</h1>
    <h2><strong>La base es {{base}}</strong></h2><br>
    
    <button (click)="acumular(1)">+1</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-1)">-1</button>
    
    <br><br>
    <button (click)="acumular2(base)">+ {{base}}</button>
    <span>{{numero1}}</span>
    <button (click)="acumular2(-base)">- {{base}}</button>
    `
})
export class ContadorComponent {
    title  :string  = 'Contador App';
    numero :number = 10;
    numero1:number = 10;
    base   :number=5;
  
    acumular(valor:number){
      this.numero +=valor;
    }
  
    acumular2(valor1:number){
      this.numero1 +=valor1;
    }
  
}