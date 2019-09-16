import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
   
   @ViewChild('txt', {static: false}) txtProgress : ElementRef;

   @Input() progreso:number = 50;
   
   @Input() leyenda: string = 'leyenda';

   @Output() actualizar:EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }



  onChanges(newValue)
  {
    // let elemHTML : any = document.getElementsByName('progreso')[0]

    // console.log(this.txtProgress)

     if(newValue >= 100) {
        this.progreso = 100;
     }

     else if (newValue <=0){
      this.progreso=0;
     } else {
      this.progreso = newValue;
     }
   
    //  elemHTML.value = this.progreso;

    this.txtProgress.nativeElement.value = this.progreso;
    this.txtProgress.nativeElement.focus
     
     this.actualizar.emit(this.progreso)
  }

  cambiarValor( valor ) {

    if(this.progreso >=100 && valor >0 ) {
      this.progreso = 100;
      return;
    }
    if(this.progreso <=0 && valor <0 ) {
      this.progreso = 0;
      return;
    }

      this.progreso = this.progreso + valor;
      

  }
}
