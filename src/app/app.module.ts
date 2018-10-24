import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routing
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { GerencialComponent } from './pages/gerencial/gerencial.component';
import { OperacionalComponent } from './pages/operacional/operacional.component';
import { ElementsComponent } from './elements/elements.component';
import { EquipoComponent } from './elements/equipo/equipo.component';
import { SensorComponent } from './elements/sensor/sensor.component';
import { HeadersComponent } from './elements/headers/headers.component';


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
  path: '',
  component: OperacionalComponent
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
      
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),//ruta
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  export class AppModule { }
