import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-incidentes',
  templateUrl: './incidentes.component.html',
  styleUrls: ['./incidentes.component.css']
})
export class IncidentesComponent implements OnInit {
  sensores: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getSensores().subscribe(data => {
      this.sensores = data
    })
  }

}
