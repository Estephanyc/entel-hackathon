import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import * as CanvasJS from '../../../assets/canvas/canvasjs.min.js';

@Component({
  selector: 'app-operacional',
  templateUrl: './operacional.component.html',
  styleUrls: ['./operacional.component.css']
})
export class OperacionalComponent implements OnInit {
  searchForm: FormGroup;
  totalSensores: any;
  sensores: any;

  constructor(private formBuilder: FormBuilder, private data:DataService) {
    this.search();
   }

  ngOnInit() {
    this.data.getSensores().subscribe(data => {
      this.sensores = data;
      let newData = JSON.parse(JSON.stringify(data))
      this.totalSensores = newData.length
   })
    let chartIncidentes = new CanvasJS.Chart("incidentes", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Tipos de sensores"
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
    let chartDispositivos = new CanvasJS.Chart("dispositivos", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Tipos de sensores"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 45, name: "Temperatura" },
          { y: 12, name: "Corriente" },
          { y: 30, name: "Velocidad del viento" },
          { y: 8, name: "Presión" },
          { y: 15, name: "Aceleración" },
          { y: 10, name: "Kilometraje" },
          { y: 25, name: "Altitud" }
        ]
      }]
    });

    chartDispositivos.render();
    chartIncidentes.render();
  
   }
  search() {
    this.searchForm = this.formBuilder.group({
      content: ['', Validators.required],
    });    
  }
  searcById(){ 
    this.data.httpDataEquipos.subscribe(data => {
      let newData = JSON.parse(JSON.stringify(data))
      newData = newData.filter(element => element.id == this.searchForm.value.content)
      this.sensores =  newData;
    })
  }
}
