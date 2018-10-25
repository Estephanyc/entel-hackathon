import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import * as CanvasJS from '../../../assets/canvas/canvasjs.min.js';


@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {
  sensores: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    CanvasJS.addColorSet("customColorSet1",
      [//colorSet Array
        "#4280EB",
        "#F16B46",
      ]);
    this.data.getSensores().subscribe(data => {
      this.sensores = data
    })

    let chart = new CanvasJS.Chart("chartEstado", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: ""
      },
      colorSet: "customColorSet1",
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 4, name: "Activos" },
          { y: 1, name: "Inactivos" }
        ]
      }]
    });

    chart.render();
  }
}
