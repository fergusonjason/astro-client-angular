import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export abstract class CatalogService {

  public stellar_classes = [
    { type: 'O'},
    { type: 'B'},
    { type: 'A'},
    { type: 'F'},
    { type: 'G'},
    { type: 'K'},
    { type: 'M'}
  ];

  constructor() { }
}
