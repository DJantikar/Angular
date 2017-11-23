import { Recipe } from "app/recipes/recipe.model";
import { EventEmitter, Injectable, OnDestroy, OnInit } from "@angular/core";
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";
import { Subscription } from "rxjs/Subscription";

@Injectable()
export class RecipeService implements OnInit{
    


    recipseSelected = new EventEmitter<Recipe>();
    recipeChanged = new Subject<Recipe[]>();

    private  recipes : Recipe[] = [ 
    new Recipe("Chole",
               "Gravy",
               'http://media3.sailusfood.com/wp-content/uploads/2011/02/amritsari-chole.jpg',
             [ new Ingredient("Tomato" , 2),new Ingredient("Onion" , 2)]),

    new Recipe("Cake",
               "Choclate",
               "http://images.media-allrecipes.com/userphotos/250x250/708879.jpg",
            [ new Ingredient("Eggs" , 2),new Ingredient("Milk" , 1)])
    ];  
    constructor (private slService : ShoppingListService){}

    ngOnInit() {

    }
    getRecipes(){
        return this.recipes.slice();
    }
    setRecipes(recipes : Recipe[]){
        this.recipes=recipes;
        this.recipeChanged.next(this.recipes.slice());
    }
    addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
    getRecipe(id : number){
        return this.recipes[id];
    }
    addRecipe(recipe : Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }
    updateRecipe(index:number,recipe : Recipe){
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes.slice());
    }
    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
    }
 
}