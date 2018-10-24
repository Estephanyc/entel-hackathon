import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  @Input()equipo

  constructor() { }

  ngOnInit() {
  }

}
