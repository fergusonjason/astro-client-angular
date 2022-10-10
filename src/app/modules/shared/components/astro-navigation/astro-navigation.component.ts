import { Component, OnInit } from '@angular/core';
import { Router, Routes, } from '@angular/router';
import { CustomRoutes } from 'src/app/modules/core/types/customroute.type';

@Component({
  selector: 'astro-navigation',
  templateUrl: './astro-navigation.component.html',
  styleUrls: ['./astro-navigation.component.css']
})
export class AstroNavigationComponent implements OnInit {

  routes! : CustomRoutes;

  constructor(private router:Router) { }

  ngOnInit(): void {

    this.routes = this.router.config;
    console.log(this.routes);
  }

}
