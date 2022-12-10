import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import { ContributorsComponent } from './contributors.component';


@NgModule({
  declarations: [
    ContributorsComponent
  ],
  exports: [
    ContributorsComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class ContributorsModule { }
