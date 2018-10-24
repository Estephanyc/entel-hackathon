import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-gerencial',
  templateUrl: './gerencial.component.html',
  styleUrls: ['./gerencial.component.css']
})
export class GerencialComponent implements OnInit {
  equipos : any;

  constructor(private data: DataService) { 
  }

  ngOnInit() {
    this.data.equipos().subscribe(data => {
       this.equipos = data
    })
    
  }
  
}
