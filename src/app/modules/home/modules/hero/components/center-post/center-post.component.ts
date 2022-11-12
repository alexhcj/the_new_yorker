import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {PostInterface} from "../../interfaces/post.interface";
import {Subscription, tap} from "rxjs";

@Component({
  selector: 'app-center-post',
  templateUrl: './center-post.component.html',
  styleUrls: ['./center-post.component.scss']
})
export class CenterPostComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription()
  public centerPost!: PostInterface

  constructor(
    private heroService: PostService
  ) { }

  ngOnInit(): void {
    this._subscription.add(
      this.heroService.getPostCenterLayout().pipe(
        tap((post) => this.centerPost = post)
      ).subscribe()
    )
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }
}
