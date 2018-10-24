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
}
