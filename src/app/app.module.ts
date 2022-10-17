import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { RouterModule, Routes } from '@angular/router';

const addRoute:Routes = [
  {
    path:"",component:ApiCallComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ApiCallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(addRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
