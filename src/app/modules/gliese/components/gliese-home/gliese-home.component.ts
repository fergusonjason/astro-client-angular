import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GlieseService } from '../../services/gliese.service';

@Component({
  selector: 'app-gliese-home',
  templateUrl: './gliese-home.component.html',
  styleUrls: ['./gliese-home.component.css']
})
export class GlieseHomeComponent implements OnInit {

  searchForm : FormGroup = new FormGroup({});

  constructor(private formBuilder : FormBuilder, public $gliese: GlieseService) { }

  ngOnInit(): void {

    this.searchForm = this.formBuilder.group({
      name : new FormControl(''),

    });
  }

}
