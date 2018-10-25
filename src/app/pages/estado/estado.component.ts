import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {
  sensores: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getSensores().subscribe(data => {
      this.sensores = data
    })
  }
}
