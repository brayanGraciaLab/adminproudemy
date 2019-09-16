import { Routes, RouterModule } from "@angular/router";
import {DashboarhComponent} from './dashboarh/dashboarh.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component'
import {PagesComponent} from './pages.component'
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';

const pagesRoutes:Routes = [
    
    {   
        path:'', 
        component:PagesComponent,
        children:[
            {path:'dashboarh',component:DashboarhComponent},
            {path:'progress',component:ProgressComponent},
            {path:'graficas1', component:Graficas1Component},
            {path:'accounts-setting', component:AccoutSettingsComponent},
            {path:'',redirectTo:'/dashboarh',pathMatch:'full'},
        ]
    },
];

export const APP_PAGES = RouterModule.forChild(pagesRoutes);