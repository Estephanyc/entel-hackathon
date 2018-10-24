import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataEquipos = "../../assets/data/equipos.json";
  dataSensores = "../../assets/data/equipos.json";
  constructor(private http: HttpClient) {}
  equipos() {
    return this.http.get(this.dataEquipos)
  }
  sensores(){
    return this.http.get(this.dataSensores)
  }
}
