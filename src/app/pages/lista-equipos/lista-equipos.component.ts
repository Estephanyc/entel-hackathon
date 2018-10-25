import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

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
  }
}
