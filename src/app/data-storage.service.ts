import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http';
import { RecipeService } from 'app/recipes/recipe.service';
import { Recipe } from 'app/recipes/recipe.model';
import { AuthService } from 'app/auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http:Http,
              private recipeService : RecipeService,
              private authService : AuthService) { }

  storeRecipes(){
    const token = this.authService.getToken();
    return this.http.put('https://dj-angular-recipe-book.firebaseio.com/recipes.json?auth='+token,
                  this.recipeService.getRecipes());
  }
  getRecipes(){
    const token = this.authService.getToken();
    this.http.get('https://dj-angular-recipe-book.firebaseio.com/recipes.json?auth='+token).
    subscribe(
    (response : Response) => {
      const recipes:Recipe[] = response.json();
      this.recipeService.setRecipes(recipes);
    }
    );
  }
}
