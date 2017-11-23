import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirectiveDirective } from 'app/shared/dropdown-directive.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DropdownDirectiveDirective    
  ],
  exports :[
    DropdownDirectiveDirective    
  ]
})
export class SharedModule { }
