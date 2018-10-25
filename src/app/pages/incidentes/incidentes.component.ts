import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import * as CanvasJS from '../../../assets/canvas/canvasjs.min.js';


@Component({
  selector: 'app-incidentes',
  templateUrl: './incidentes.component.html',
  styleUrls: ['./incidentes.component.css']
})
export class IncidentesComponent implements OnInit {
  sensores: any;
  totalSensores: any;
  sensoresActivos: any;
  sensoresInactivos: any;
  incidentes: any;
  mifuncion: any;
  numeroIncidentes: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getSensores().subscribe(data => {
      this.sensores = data;
      let newData = JSON.parse(JSON.stringify(data))
      this.totalSensores = newData.length
      this.sensoresActivos = newData.filter(element => element.estado == "activo")
      this.sensoresActivos = this.sensoresActivos.length
      this.sensoresInactivos = newData.filter(element => element.estado == "inactivo")
      this.sensoresInactivos = this.sensoresInactivos.length;
      this.incidentes = [];

      newData.forEach(sensor => {
        let mediciones = Object.entries(sensor.mediciones)
        mediciones.forEach((element) => {
          if (element[1] > sensor.rangos.max || element[1] < sensor.rangos.min) {
            this.incidentes.push('el dispositivo ' + sensor.id + ' esta fuera del rango en la fecha' + element[0])
          }
        })
      });

      this.numeroIncidentes = this.incidentes.length;
    })

    let chart = new CanvasJS.Chart("chartIncidentes", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: ""
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 2, name: "Aumento de temperatura" },
          { y: 1, name: "Baja de corriente" },
          { y: 1, name: "Aumento de presión" },
          { y: 3, name: "Disminución de aceleración" },
          { y: 5, name: "Aumento kilometraje" },
          { y: 2, name: "Aumento partículas de humo" },
          { y: 9, name: "Bajo nivel de combustible" }
        ]
      }]
    });

    chart.render();
  }
}
