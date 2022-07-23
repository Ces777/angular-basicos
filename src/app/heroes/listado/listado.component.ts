import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[]= ['Spiderman','Iroman','Hulk','Capitan America','Thor'];

  heroesBorrados: string[] = [];
  heroeBorrado: string="";

  borrando(){
    this.heroeBorrado = this.heroes.pop() || "";
    // console.log(heroeBorrado);
    if(this.heroeBorrado !== ""){
      this.heroesBorrados.push(this.heroeBorrado)
  
    }
      

  }
}
