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

  constructor(private formBuilder: FormBuilder, private DataService:DataService) {
    // this.search();
   }

  ngOnInit() {
/*     this.DataService.equipoId('98989')
 */  }
  /* search() {
    this.searchForm = this.formBuilder.group({
      content: ['', Validators.required],
    });
  } */
}
