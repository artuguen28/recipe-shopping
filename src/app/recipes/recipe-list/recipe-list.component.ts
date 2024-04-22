import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe(
      "Test Recipe", 
      "This is a simply test", 
      "https://cdn.pixabay.com/photo/2024/04/06/07/47/cheeseburger-8678826_1280.jpg"),
    new Recipe(
      "Test Recipe", 
      "This is a simply test", 
      "https://cdn.pixabay.com/photo/2024/04/06/07/47/cheeseburger-8678826_1280.jpg"),
    new Recipe(
      "Test Recipe", 
      "This is a simply test", 
      "https://cdn.pixabay.com/photo/2024/04/06/07/47/cheeseburger-8678826_1280.jpg")
      
      
  ];

  constructor() {}

  ngOnInit() {

  }
}
