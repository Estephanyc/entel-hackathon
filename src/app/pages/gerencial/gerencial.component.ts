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


    CanvasJS.addColorSet("customColorSet2",
      [//colorSet Array
        "#4280EB",
        "#4280EB",
        "#4280EB",
        "#4280EB",
        "#4280EB",
        "#4280EB",
        "#4280EB",
        "#4280EB",
        "#4280EB",
        "#4280EB",
        "#4280EB",
        "#4280EB",
      ]); 
    let chartDispositivos = new CanvasJS.Chart("dispositivos", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "N° de dispositivos año 2017"
      },
      colorSet: "customColorSet2",
      data: [{
        type: "column",
        dataPoints: [
          { y: 1, x: 4, label: "Enero" },
          { y: 2, label: "Febrero" },
          { y: 2, label: "Marzo" },
          { y: 1, label: "Abril" },
          { y: 1, label: "Mayo" },
          { y: 0, label: "Junio" },
          { y: 2, label: "Julio" },
          { y: 1, label: "Agosto" },
          { y: 2, label: "Septiembre" },
          { y: 0, label: "Octubre" },
          { y: 1, label: "Noviembre" },
          { y: 4, label: "Diciembre" }
        ]
      }]
    });

    CanvasJS.addColorSet("customColorSet1",
      [//colorSet Array
        "#4280EB",
        "#F16B46",
        "#4280EB",
        "#F16B46",
        "#4280EB",
        "#F16B46",
        "#4280EB",
        "#F16B46",
        "#4280EB",
        "#F16B46",
        "#4280EB",
        "#F16B46",
        "#4280EB",
        "#F16B46",
        "#4280EB",
        "#F16B46",
        "#4280EB",
        "#F16B46",
        "#4280EB",
        "#F16B46",
        "#4280EB",
        "#F16B46",
        "#4280EB",
        "#F16B46"
      ]);

    let chartEstados = new CanvasJS.Chart("estados", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Dispositivos activos e inactivos"
      },
      subtitles: [{
        text: "A: Avtivo, I: Inactivo"
      }],
      colorSet: "customColorSet1",
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "A, ene" },
          { y: 55, label: "I, ene" },
          { y: 50, label: "A, feb" },
          { y: 65, label: "I, feb" },
          { y: 95, label: "A, mar" },
          { y: 68, label: "I, mar" },
          { y: 28, label: "A, abr" },
          { y: 34, label: "I, abr" },
          { y: 14, label: "A, may" },
          { y: 71, label: "I, may" },
          { y: 55, label: "A, jun" },
          { y: 50, label: "I, jun" },
          { y: 65, label: "A, jul" },
          { y: 95, label: "I, jul" },
          { y: 68, label: "A, ago" },
          { y: 28, label: "I, ago" },
          { y: 34, label: "A, sept" },
          { y: 14, label: "I, sept" },
          { y: 65, label: "A, oct" },
          { y: 95, label: "I, oct" },
          { y: 68, label: "A, nov" },
          { y: 28, label: "I, nov" },
          { y: 34, label: "A, dic" },
          { y: 14, label: "I, dic" }
        ]
      }]
    });

    chartEstados.render();
    chartDispositivos.render();
  }

  }

  /* miFuncion(data){

  }
  ngOnDestroy(): void {
   
    this.data.listeners.
  } */


