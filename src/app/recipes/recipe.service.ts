import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Salmon',
            'From the NYtimes',
            'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
            [
              new Ingredient('Meat', 1 ),
              new Ingredient('Dill', 3)
            ]
        ),
        new Recipe(
            'Pasta',
            'From All Recipes',
            'http://images.media-allrecipes.com/images/75131.jpg',
            [
              new Ingredient('Noodels', 3),
              new Ingredient('Sauce', 2)
            ]
        ),
    ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }
}