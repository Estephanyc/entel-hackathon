import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-operacional',
  templateUrl: './operacional.component.html',
  styleUrls: ['./operacional.component.css']
})
export class OperacionalComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private data:DataService) {
    this.search();
   }

  ngOnInit() {
   this.data.equipoId("rtyuuo").then(equipo => {
  console.log(equipo)
   })
   }
  search() {
    this.searchForm = this.formBuilder.group({
      content: ['', Validators.required],
    });
  }
}
