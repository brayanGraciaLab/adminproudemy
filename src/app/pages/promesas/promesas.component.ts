import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    
    this.contarTres().then(() => console.log('termino!'));

    this.contarTres().catch(err => console.error('Algo salio Mal ', err))
   }

  ngOnInit() {
  }

  contarTres(){
    let promesa = new Promise((resolve,reject) => {
            
      let contador = 0;
     let intervalo = setInterval(() => {
        
        contador += 1;
         console.log(contador)

        if(contador === 3){
          reject('Ella no Te Ama');
          clearInterval(intervalo);
        }
      }, 1000)

    });
    return promesa;

  }
}

