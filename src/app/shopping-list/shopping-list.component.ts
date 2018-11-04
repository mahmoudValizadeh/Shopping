import { Component, OnInit } from '@angular/core';
import {ingredient} from '../Shares/Models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:ingredient[]=[
      new ingredient('بسته ماکارانی',1),
      new ingredient('پیاز',2),
  ];
  constructor() { }

  ngOnInit() {
  }

}
