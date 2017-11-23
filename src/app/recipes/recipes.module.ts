import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from 'app/recipes/recipes.component';
import { RecipesListComponent } from 'app/recipes/recipes-list/recipes-list.component';
import { RecipeDetailComponent } from 'app/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from 'app/recipes/recipes-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from 'app/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from 'app/recipes/recipe-edit/recipe-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from 'app/recipes/recipes-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { ShoppingListComponent } from 'app/shopping-list/shopping-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ],
  declarations: [ RecipesComponent,
    RecipesListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ]
})
export class RecipesModule { }
