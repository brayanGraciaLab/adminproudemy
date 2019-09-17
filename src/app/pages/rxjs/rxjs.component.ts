import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import {retry, map, filter} from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit , OnDestroy {
  lele : Subscription;
  constructor() { 
  
    

   this.lele = this.retornarObservable().pipe()
    .subscribe(
       numero => console.log('subs',numero),
       error => console.error('Error en el obs', error),
       () => console.log('El observador Termino')

    )}

  ngOnInit() {
  }
  
  ngOnDestroy(){
    console.log('La Pagina Se va  a Cerrar')
    this.lele.unsubscribe();
  }

  retornarObservable(): Observable<any>{
    
    return new Observable( (observe: Subscriber<any>) => {
      let contador = 0;

      let intervalo = setInterval(()=> {

        contador += 1;

        const salida = {
          valor:contador
        }
        observe.next(salida);
         
        // if(contador === 3){
        //   clearInterval(intervalo);
        //   observe.complete();
        // }

        // if(contador === 2){
        //   //clearInterval(intervalo);
        //   observe.error('Auxilio');
        //}
      }, 1000);
    }).pipe( map(res => res.valor),
      filter( (valor,index) =>{
      // console.log('filter', valor , index);
      if((valor % 2) === 1){
        //impar
        return true;
      }else{
        //impar
        return false;
      }
     
    } )

    
    )}
}
