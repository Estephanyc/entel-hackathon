import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { element } from 'protractor';
import * as CanvasJS from '../../../assets/canvas/canvasjs.min.js';


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
  numeroIncidentes: any;
  

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
      this.incidentes = [];
      
      newData.forEach(sensor => {
       let mediciones = Object.entries(sensor.mediciones)
       mediciones.forEach((element)=>{
          if (element[1] > sensor.rangos.max || element[1] < sensor.rangos.min){
            this.incidentes.push('el dispositivo ' + sensor.id + ' esta fuera del rango en la fecha' + element[0])
        } 
       })        
      });

      this.numeroIncidentes = this.incidentes.length;
    })
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Apple" },
          { y: 55, label: "Mango" },
          { y: 50, label: "Orange" },
          { y: 65, label: "Banana" },
          { y: 95, label: "Pineapple" },
          { y: 68, label: "Pears" },
          { y: 28, label: "Grapes" },
          { y: 34, label: "Lychee" },
          { y: 14, label: "Jackfruit" }
        ]
      }]
    });

    chart.render();
  }

  /* miFuncion(data){

  }
  ngOnDestroy(): void {
   
    this.data.listeners.
  } */

}
