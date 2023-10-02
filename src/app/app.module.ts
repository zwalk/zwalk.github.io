import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { V1Component } from './v1/v1.component';
import { V2Component } from './v2/v2.component';


@NgModule({
  declarations: [
    AppComponent,
    V1Component,
    V2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
