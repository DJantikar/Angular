import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  

  ingredients : Ingredient[] ;
  private subscription : Subscription


  constructor( private shoppinListService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinListService.getIngredients();
    this.subscription=this.shoppinListService.ingredientsChanged
        .subscribe(
          (inggredients : Ingredient[]) =>  { this.ingredients = inggredients;}
        );
  }
  onEditItem(index : number){
    this.shoppinListService.startedEditing.next(index);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
