import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GlieseService } from '../../services/gliese.service';
import { Gliese } from '../../types/gliese';

@Component({
  selector: 'app-gliese-home',
  templateUrl: './gliese-home.component.html',
  styleUrls: ['./gliese-home.component.css']
})
export class GlieseHomeComponent implements OnInit {

  searchForm : FormGroup = new FormGroup({});

  searchResults : Gliese[] = [];

  constructor(private formBuilder : FormBuilder, public $gliese: GlieseService, public $dialog : MatDialog) { }

  ngOnInit(): void {

    this.searchForm = this.formBuilder.group({
      name : new FormControl(''),
      stellar_class: new FormControl('')
    });
  }

  onSearch() : void {

  }

}
