import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmodeModule } from './amode/amode.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BmodeModule } from './bmode/bmode.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmodeModule,
    BmodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
