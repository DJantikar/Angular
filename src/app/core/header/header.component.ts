import { Component} from '@angular/core';
import { DataStorageService } from 'app/data-storage.service';
import {Response} from '@angular/http';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dsService:DataStorageService, 
              public authService : AuthService){}

  onSave(){
    this.dsService.storeRecipes().subscribe(
      (response : Response) => {
        console.log(response);
      }
    );
  }

  onGet(){
    this.dsService.getRecipes();
  }
  onLogout(){
    this.authService.logout();
  }
}
