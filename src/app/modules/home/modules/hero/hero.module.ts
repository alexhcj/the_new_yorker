import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import {PostService} from "./services/post.service";
import {HeroComponent} from "./hero.component";
import { LayoutComponent } from './components/layout/layout.component';
import { LeftPostsComponent } from './components/left-posts/left-posts.component';
import { RightPostsComponent } from './components/right-posts/right-posts.component';
import { CenterPostComponent } from './components/center-post/center-post.component';
import { UnderCenterPostComponent } from './components/under-center-post/under-center-post.component';
import {PuzzlesAndGamesService} from "../../components/puzzles-and-games/services/puzzles-and-games.service";


@NgModule({
  declarations: [
    HeroComponent,
    LayoutComponent,
    LeftPostsComponent,
    RightPostsComponent,
    CenterPostComponent,
    UnderCenterPostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeroComponent,
  ],
  providers: [
    PostService,
    PuzzlesAndGamesService
  ]
})
export class HeroModule { }
