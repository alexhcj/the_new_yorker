import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
import {LayoutComponent} from "./components/layout/layout.component";
import {HeaderModule} from "./modules/header/header.module";
import {SectionPostListModule} from "../../shared/modules/section-post-list/section-post-list.module";
import {HomeComponent} from "./home.component";
import {HeroModule} from "./modules/hero/hero.module";
import {SpotlightModule} from "./modules/spotlight/spotlight.module";
import { SubscribeSectionComponent } from './components/subscribe-section/subscribe-section.component';


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
    SpotlightModule
  ],
  exports: [HomeComponent, LayoutComponent]
})
export class HomeModule { }
