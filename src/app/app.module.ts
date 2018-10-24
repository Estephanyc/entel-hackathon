import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GerencialComponent } from './pages/gerencial/gerencial.component';
import { OperacionalComponent } from './pages/operacional/operacional.component';
import { ElementsComponent } from './elements/elements.component';
import { EquipoComponent } from './elements/equipo/equipo.component';
import { SensorComponent } from './elements/sensor/sensor.component';
import { HeadersComponent } from './elements/headers/headers.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
