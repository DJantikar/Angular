import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from "app/recipes/recipe.service";
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
  
})
export class RecipesListComponent implements OnInit,OnDestroy {

  recipes : Recipe[] =[];
  subscription : Subscription = new Subscription();
  constructor(private recipeService : RecipeService,
              private router : Router,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes : Recipe[]) => {
          this.recipes = recipes;
      }
  );
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo : this.route});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
