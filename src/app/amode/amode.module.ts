import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcomComponent } from './acom/acom.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AcomComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  exports:[
    AcomComponent
  ]
})
export class AmodeModule { }
