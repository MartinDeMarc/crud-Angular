import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListProductComponent,
    AddEditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
