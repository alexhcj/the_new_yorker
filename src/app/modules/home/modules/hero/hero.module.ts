import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import {HeroComponent} from "./hero.component";
import {PostService} from "./services/post.service";
import { LeftPostsComponent } from './components/left-posts/left-posts.component';
import { RightPostsComponent } from './components/right-posts/right-posts.component';
import { CenterPostComponent } from './components/center-post/center-post.component';
import { UnderCenterPostComponent } from './components/under-center-post/under-center-post.component';
import { PuzzlesAndGamesComponent } from '../../components/puzzles-and-games/puzzles-and-games.component';
import {PuzzlesAndGamesService} from "./services/puzzles-and-games.service";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HeroComponent,
    LayoutComponent,
    LeftPostsComponent,
    RightPostsComponent,
    CenterPostComponent,
    UnderCenterPostComponent,
    PuzzlesAndGamesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeroComponent,
    PuzzlesAndGamesComponent
  ],
  providers: [
    PostService,
    PuzzlesAndGamesService
  ]
})
export class HeroModule { }
