import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import {ListenComponent} from "./listen.component";
import {ListenService} from "./services/listen.service";


@NgModule({
  declarations: [
    ListenComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ListenComponent],
  providers: [
    ListenService
  ]
})
export class ListenModule { }
