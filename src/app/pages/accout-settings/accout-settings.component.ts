import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor( public _ajustes:SettingService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema:string , link:any){
    console.log(tema)
    console.log(link)

    this.cambiarCheck(link)

    this._ajustes.cargarTema(tema);

  
  }

  cambiarCheck(link:any){
      let selectores:any = document.getElementsByClassName('selector');

      for( let ref of selectores) {
        ref.classList.remove('working');
      }

      link.classList.add('working')
  }

  colocarCheck(){
    let selectores:any = document.getElementsByClassName('selector');

    let tema = this._ajustes.ajustes.tema;
    for(let ref of selectores){
      if(ref.getAttribute('data-theme') === tema){
        ref.classList.add('working');
        break;
      }
    }
  }
}
