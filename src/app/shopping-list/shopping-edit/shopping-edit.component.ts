import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model'
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy  {
  @ViewChild('f') slForm : NgForm ;

  subscription: Subscription;
  editMode : boolean = false;
  editedItemIndex : number ;
  editedItem:Ingredient ;

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (index:number) => {
        this.editMode=true;
        this.editedItemIndex=index;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name : this.editedItem.name,
          amount : this.editedItem.amount
        });
      }
    );

  }
  constructor (private slService : ShoppingListService){}

  onAddItem(form : NgForm){
    const v = form.value;
    const ing = new Ingredient(v.name,v.amount);
    this.editMode ? 
      this.slService.updateIngredient(this.editedItemIndex,ing) :
      this.slService.addIngredient(ing);
    this.editMode=false;
    form.reset();
  }
  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.editMode=false;
    this.slForm.reset();
  }
  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
