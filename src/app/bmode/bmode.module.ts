import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcomComponent } from './bcom/bcom.component';
import { AmodeModule } from '../amode/amode.module';
import { AcomComponent } from '../amode/acom/acom.component';



@NgModule({
  declarations: [
    BcomComponent
  ],
  imports: [
    CommonModule,
    AmodeModule,
   
  ],
  exports:[
    BcomComponent
  ]
})
export class BmodeModule { 

 
  
}
