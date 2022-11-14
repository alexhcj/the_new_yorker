import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {PuzzlesAndGamesComponent} from "./puzzles-and-games.component";
import {PuzzlesAndGamesService} from "./services/puzzles-and-games.service";



@NgModule({
  declarations: [
    PuzzlesAndGamesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PuzzlesAndGamesComponent],
  providers: [
    PuzzlesAndGamesService
  ]
})
export class PuzzlesAndGamesModule { }
