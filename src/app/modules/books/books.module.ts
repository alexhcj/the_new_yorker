import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import {BooksRoutingModule} from "./books-routing.module";
import {LayoutComponent} from "./components/layout/layout.component";
import {HeaderModule} from "./modules/header/header.module";



@NgModule({
  declarations: [
    BooksComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HeaderModule
  ]
})
export class BooksModule { }
