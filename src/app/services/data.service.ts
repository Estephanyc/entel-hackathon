import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  httpDataEquipos = this.http.get("../../assets/data/equipos.json");
  dataSensores = this.http.get("../../assets/data/equipos.json");

  constructor(private http: HttpClient) {}
  equipos() {
    return this.httpDataEquipos
  }
  sensores(){
    return this.httpDataEquipos
  }
  equipoId(id){
    return new Promise((resolve, reject) => {
      this.httpDataEquipos.subscribe(data => {
        let newData = JSON.parse(JSON.stringify(data))
        resolve(newData.filter(element => element.id == id))
      }) 
    })    
  }
}
