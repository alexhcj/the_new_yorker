import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import {SpotlightComponent} from "./spotlight.component";
import {SpotlightService} from "./services/spotlight.service";


@NgModule({
  declarations: [
    SpotlightComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SpotlightComponent],
  providers: [
    SpotlightService
  ]
})
export class SpotlightModule { }
