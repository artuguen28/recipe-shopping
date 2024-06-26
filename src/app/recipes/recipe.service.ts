import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {

	recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
	// 	new Recipe(
	// 		"Recipe A", 
	// 		"This is a simply test", 
	// 		"https://cdn.pixabay.com/photo/2024/04/06/07/47/cheeseburger-8678826_1280.jpg",
	// 		[
	// 			new Ingredient('Meat', 1),
	// 			new Ingredient('French Fries', 20)
	// 		]
	// 	),
	// 	new Recipe(
	// 		"Recipe B", 
	// 		"Test Test", 
	// 		"https://cdn.pixabay.com/photo/2024/04/06/07/47/cheeseburger-8678826_1280.jpg",
	// 		[
	// 			new Ingredient('Buns', 2),
	// 			new Ingredient('Meat', 1)
	// 		]
	// 	)   
	// ];

	private recipes: Recipe[] = [];

	constructor(private slService: ShoppingListService) {}

	setRecipes(recipes: Recipe[]) {
		this.recipes = recipes;
		this.recipesChanged.next(this.recipes.slice());
	}

	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(index: number) {
		return this.recipes[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}

	updateRecipe(index: number, newRecipe: Recipe) {
		this.recipes[index] = newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}

	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}
}