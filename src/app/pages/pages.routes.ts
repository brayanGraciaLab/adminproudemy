import { Routes, RouterModule } from "@angular/router";
import {DashboarhComponent} from './dashboarh/dashboarh.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component'
import {PagesComponent} from './pages.component'
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes:Routes = [
    
    {   
        path:'', 
        component:PagesComponent,
        children:[
            {path:'dashboard',component:DashboarhComponent, data:{titulo:'Dashboard'}},
            {path:'progress',component:ProgressComponent, data:{titulo:'Progress'}},
            {path:'graficas1', component:Graficas1Component, data:{titulo:'Graficas'}},
            {path:'accounts-setting', component:AccoutSettingsComponent, data:{titulo:'Ajuste Del tema'}},
            {path:'promesas', component:PromesasComponent, data:{titulo:'Promesas'}},
            {path:'rxjs', component:RxjsComponent, data:{titulo:'RxJs'}},
            {path:'',redirectTo:'/dashboarh',pathMatch:'full'},
        ]
    },
];

export const APP_PAGES = RouterModule.forChild(pagesRoutes);