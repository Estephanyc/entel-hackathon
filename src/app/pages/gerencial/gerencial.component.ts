import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

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
   console.log(this.totalSensores)
    this.mifuncion = (data) => {
      this.mifuncion(data);
    };
   this.data.listeners.push(this.mifuncion)
  }

  ngOnInit() {
    this.data.getSensores().subscribe(data => {
       this.sensores = data
       console.log(data)
    })
  }

  miFuncion(data){

  }
 /*  ngOnDestroy(): void {
   
    this.data.listeners.
  } */
}
