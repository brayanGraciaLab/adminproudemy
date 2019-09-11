import {NgModule} from '@angular/core';
import { DashboarhComponent } from './dashboarh/dashboarh.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        DashboarhComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
    ],

    exports: [
        DashboarhComponent,
        ProgressComponent,
        Graficas1Component,
  
    ],

    imports:[
        SharedModule
    ]
})

export class PagesModule {}