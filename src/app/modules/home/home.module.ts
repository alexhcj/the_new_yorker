import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeRoutingModule} from "./home-routing.module";
import {HeroModule} from "./modules/hero/hero.module";
import {HeaderModule} from "./modules/header/header.module";
import {SpotlightModule} from "./modules/spotlight/spotlight.module";
import {SectionPostListModule} from "../../shared/modules/section-post-list/section-post-list.module";
import {LayoutComponent} from "./components/layout/layout.component";
import {HomeComponent} from "./home.component";
import { SubscribeSectionComponent } from './components/subscribe-section/subscribe-section.component';
import {PuzzlesAndGamesModule} from "./components/puzzles-and-games/puzzles-and-games.module";


@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    SubscribeSectionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    SectionPostListModule,
    HeroModule,
    SpotlightModule,
    PuzzlesAndGamesModule
  ],
  exports: [HomeComponent, LayoutComponent]
})
export class HomeModule { }
