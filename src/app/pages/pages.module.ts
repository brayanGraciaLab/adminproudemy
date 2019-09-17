import {NgModule} from '@angular/core';

//ng2-charts

import { ChartsModule } from 'ng2-charts';

import {FormsModule} from '@angular/forms'
import { DashboarhComponent } from './dashboarh/dashboarh.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { APP_PAGES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component'
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    declarations: [
        DashboarhComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingsComponent,
        PromesasComponent,
        RxjsComponent
    ],

    exports: [
        DashboarhComponent,
        ProgressComponent,
        Graficas1Component,
  
    ],

    imports:[
        SharedModule,
        APP_PAGES,
        FormsModule,
        ChartsModule,
       
    ]
})

export class PagesModule {}