import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe.component';
import {SubscribeRoutingModule} from "./subscribe-routing.module";



@NgModule({
  declarations: [
    SubscribeComponent
  ],
  imports: [
    CommonModule,
    SubscribeRoutingModule
  ],
  exports: [
    SubscribeComponent
  ]
})
export class SubscribeModule { }
