import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, tap} from "rxjs";
import {SpotlightPostInterface} from "./interfaces/spotlight-post.interface";
import {SpotlightService} from "./services/spotlight.service";

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss']
})
export class SpotlightComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription()
  public spotlightList: SpotlightPostInterface[] = []

  constructor(
    private spotlightService: SpotlightService
  ) { }

  ngOnInit(): void {
    this._subscription.add(
      this.spotlightService.getSpotlightPosts().pipe(
        tap((posts) => this.spotlightList = posts)
      ).subscribe()
    )
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }

}
