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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeadersComponent } from './elements/headers/headers.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaEquiposComponent } from './pages/lista-equipos/lista-equipos.component';
import { EstadoComponent } from './pages/estado/estado.component';


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
    path: 'lista-sensores',
     component: ListaEquiposComponent
  },
  {
    path: 'estado-sensores',
    component: EstadoComponent
  },
{
  path: 'agregar-operador',
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
    NavbarComponent,
    ListaEquiposComponent,
    EstadoComponent,

    
        
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),//ruta
  BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
 export class AppModule { }