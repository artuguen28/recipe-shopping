import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
		new Recipe(
			"Recipe A", 
			"This is a simply test", 
			"https://cdn.pixabay.com/photo/2024/04/06/07/47/cheeseburger-8678826_1280.jpg",
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20)
			]
		),
		new Recipe(
			"Recipe B", 
			"Test Test", 
			"https://cdn.pixabay.com/photo/2024/04/06/07/47/cheeseburger-8678826_1280.jpg",
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat', 1)
			]
		)   
	];

	constructor(private slService: ShoppingListService) {}

	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(index: number) {
		return this.recipes[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}
}