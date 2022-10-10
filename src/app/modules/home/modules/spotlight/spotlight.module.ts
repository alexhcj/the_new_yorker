import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpotlightComponent} from "./spotlight.component";
import {SpotlightService} from "./services/spotlight.service";


@NgModule({
  declarations: [
    SpotlightComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [SpotlightComponent],
  providers: [
    SpotlightService
  ]
})
export class SpotlightModule { }
