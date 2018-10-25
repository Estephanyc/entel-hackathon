import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
//routing
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GerencialComponent } from './pages/gerencial/gerencial.component';
import { OperacionalComponent } from './pages/operacional/operacional.component';
import { ElementsComponent } from './elements/elements.component';
import { EquipoComponent } from './elements/equipo/equipo.component';
import { SensorComponent } from './elements/sensor/sensor.component';
import { HeadersComponent } from './elements/headers/headers.component';
import { FormComponent } from './form/form.component';


//ruteo
const appRoutes: Routes = [ 
  {
    path : 'gerencial',
    component : GerencialComponent 
  },
  {
    path: 'operador',
    component: OperacionalComponent
  },
{
  path: 'headers',
  component: HeadersComponent
},
{
  path: 'forms',
  component: FormComponent
},
];


@NgModule({
  declarations: [
    AppComponent,
    GerencialComponent,
    OperacionalComponent,
    ElementsComponent,
    EquipoComponent,
    SensorComponent,
    HeadersComponent,
    FormComponent,

    
        
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),//ruta
  BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
 export class AppModule { }