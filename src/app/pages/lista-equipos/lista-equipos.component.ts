import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import * as CanvasJS from '../../../assets/canvas/canvasjs.min.js';


@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.css']
})
export class ListaEquiposComponent implements OnInit {
  sensores: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getSensores().subscribe(data => {
      this.sensores = data})
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
    chartDispositivos.render();

  }
}
