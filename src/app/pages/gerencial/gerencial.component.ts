import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { element } from 'protractor';

@Component({
  selector: 'app-gerencial',
  templateUrl: './gerencial.component.html',
  styleUrls: ['./gerencial.component.css']
})
export class GerencialComponent implements OnInit {
  sensores : any;
  totalSensores: any;
  sensoresActivos: any;
  sensoresInactivos: any;
  incidentes: any;
  mifuncion: any;

  constructor(private data: DataService) { 
   this.totalSensores = this.data.totalSensores
   /* console.log(this.totalSensores)
    this.mifuncion = (data) => {
      this.mifuncion(data);
    }; 
   this.data.listeners.push(this.mifuncion)*/
  }

  ngOnInit() {
    this.data.getSensores().subscribe(data => {
      this.sensores = data
      let newData = JSON.parse(JSON.stringify(data))
      this.totalSensores = newData.length
      this.sensoresActivos = newData.filter(element => element.estado == "activo")
      this.sensoresActivos = this.sensoresActivos.length
      this.sensoresInactivos = newData.filter(element => element.estado == "inactivo")
      this.sensoresInactivos = this.sensoresInactivos.length;
      newData.forEach(sensor => {
        console.log(sensor)
       let mediciones = Object.entries(sensor.mediciones)
       mediciones.forEach((element)=>{
          if (element[1] > sensor.rangos.max || element[1] < sensor.rangos.min){
          console.log('el dispositivo ' + sensor.id + ' esta fuera del rango en la fecha' + element[0])
        } 
       })        
      });

    })}

  /* miFuncion(data){

  }
  ngOnDestroy(): void {
   
    this.data.listeners.
  } */
}
