import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties:Array<any>=
  [
    {
      "Id":1,
      "Name":"Rhythm's Home",
      "Type":"Bunglow",
      "Price":2000000
    },
    {
      "Id":2,
      "Name":"RK's Villa",
      "Type":"Villa",
      "Price":2000000
    },
    {
      "Id":3,
      "Name":"Old Farm House",
      "Type":"Farm house",
      "Price":3400000
    },
    {
      "Id":4,
      "Name":"Orchid Apartment",
      "Type":"Apartment",
      "Price":1300000
    },
    {
      "Id":4,
      "Name":"Orchid Apartment",
      "Type":"Apartment",
      "Price":1300000
    },
    {
      "Id":5,
      "Name":"Johny's Home",
      "Type":"Bunglow",
      "Price":2000000
    },
    {
      "Id":6,
      "Name":"Pink Villa",
      "Type":"Villa",
      "Price":2000000
    },
    {
      "Id":7,
      "Name":"New Farm House",
      "Type":"Farm house",
      "Price":3200000
    },
    {
      "Id":8,
      "Name":"Tulip Apartment",
      "Type":"Apartment",
      "Price":3300000
    }

]
  constructor() { }

  ngOnInit(): void {
  }

}
