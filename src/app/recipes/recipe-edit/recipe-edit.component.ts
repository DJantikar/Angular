import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from 'app/recipes/recipe.service';
import { Recipe } from 'app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeForm : FormGroup;
  
  
  id : number;
  editMode : boolean = false;
  constructor(private route : ActivatedRoute,
              private recipeService : RecipeService,
              private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params : Params) => {
        this.id = params['id'];
        this.editMode = params['id']!=null;
        this.initForm();
      }
    );
  }
  onCancel(){

   //this.recipeForm.reset();
   this.router.navigate(['../'],{relativeTo:this.route});
  }
  onSubmit(){
    const value = this.recipeForm.value;
    const newRecipe = new Recipe(value['name'],value['description'],value['imagePath'],value['ingredients']);
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,newRecipe);
    }
    else{
      this.recipeService.addRecipe(newRecipe);
    }
    this.onCancel();
  }
  onAddIngredients(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null,[Validators.required , 
          Validators.pattern(/^[1-9]+[0-9]*$/)])
      }
      )
    );
  }
  onRemoveIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
  initForm(){
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    let recipeIngredients =  new FormArray([]);
    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImagePath = recipe.imagePath;
      if(recipe['ingredients']){
        for(let ing of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ing.name,Validators.required),
              'amount' : new FormControl(ing.amount , 
                         [Validators.required , 
                          Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name':new FormControl(recipeName,Validators.required),
      'description':new FormControl(recipeDescription,Validators.required),
      'imagePath':new FormControl(recipeImagePath),
      'ingredients' : recipeIngredients
    });

  }
}
