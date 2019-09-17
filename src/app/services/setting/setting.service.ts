import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
   ajustes:Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema :'default'
   }
   
 
   constructor( @Inject(DOCUMENT) private _document,) {
     this.cargarAjustes();
    }
     
   guardarAjuste(){
     console.log('Guardado En El Local Store')
     localStorage.setItem('ajuste', JSON.stringify(this.ajustes))
   }
   
    cargarAjustes(){
      console.log("go-la ")
      if(localStorage.getItem('ajuste')){
        this.ajustes = JSON.parse(localStorage.getItem('ajuste'));
        console.log('Cargado del LocalStore')

        this.cargarTema(this.ajustes.tema)
      }else{
        console.log('Usando Valores Por Defecto')
      }
    
  }

  cargarTema(tema:string){
     
    let url = `assets/css/colors/${tema}.css`

    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    
    this.guardarAjuste();

  }
}
  interface Ajustes {
     temaUrl:string
     tema:string
   }
