import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  httpDataEquipos = this.http.get("../../assets/data/sensores.json");
  totalSensores: any;
  sensoresActivos: any;
  sensoresInactivos: any;
  incidentes: any;
  sensores: any;
  listeners: [(data:any)=>void];
    constructor(private http: HttpClient) {
      this.httpDataEquipos.subscribe(data => {
        this.sensores = data;
        let newData = JSON.parse(JSON.stringify(data))
        this.totalSensores = newData.length
        this.sensoresActivos = newData.filter(element => element.estado == "activo")
        this.sensoresActivos = this.sensoresActivos.length
        this.sensoresInactivos = newData.filter(element => element.estado == "inactivo")
        this.sensoresInactivos = this.sensoresInactivos.length;
        this.listeners.forEach(element => {
          element(data);
        });
    })
    }
 
  getSensores(){
    return this.httpDataEquipos
  }

  dataSensores(){
   this.httpDataEquipos.subscribe(data => {
     let newData = JSON.parse(JSON.stringify(data))
    return this.totalSensores = newData.length
   })
  }
}
