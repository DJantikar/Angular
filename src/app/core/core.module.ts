import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'app/app-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { HeaderComponent } from 'app/core/header/header.component';
import { HomeComponent } from 'app/core/home/home.component';
import { FormsModule } from '@angular/forms';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { RecipeService } from 'app/recipes/recipe.service';
import { DataStorageService } from 'app/data-storage.service';
import { AuthService } from 'app/auth/auth.service';
import { AuthGuard } from 'app/auth/auth-guard.service';

@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  providers: [ ShoppingListService ,
    RecipeService,
    DataStorageService,
    AuthService
  ],
  exports:[
    AppRoutingModule,
    HeaderComponent
  ]
})
export class CoreModule { }
