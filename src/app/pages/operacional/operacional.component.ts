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
