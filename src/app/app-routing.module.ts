import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcomComponent } from './amode/acom/acom.component';
import { AmodeModule } from './amode/amode.module';
import { BmodeModule } from './bmode/bmode.module';
// import{} from "./amode/amode.module"
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AmodeModule,
    BmodeModule
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
