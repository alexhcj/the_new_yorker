import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import {NewsRoutingModule} from "./news-routing.module";
import {LayoutComponent} from "./components/layout/layout.component";
import {HeaderModule} from "./modules/header/header.module";



@NgModule({
  declarations: [
    NewsComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    HeaderModule
  ]
})
export class NewsModule { }
