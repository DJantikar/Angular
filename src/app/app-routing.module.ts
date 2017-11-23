import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { HomeComponent } from "app/core/home/home.component";

const appRoutes: Routes = [
    { path : '' ,component:HomeComponent ,pathMatch:'full'},
    { path: 'recipes',loadChildren:'./recipes/recipes.module#RecipesModule'},
    { path : 'shopping-list' ,component : ShoppingListComponent},
];
@NgModule({
    imports : [RouterModule.forRoot(appRoutes,{preloadingStrategy : PreloadAllModules})],
    exports : [RouterModule]
})
export class AppRoutingModule{

}