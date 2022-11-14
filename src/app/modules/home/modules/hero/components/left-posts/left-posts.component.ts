import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {Subscription, tap} from "rxjs";
import {PostInterface} from "../../interfaces/post.interface";

@Component({
  selector: 'app-left-posts',
  templateUrl: './left-posts.component.html',
  styleUrls: ['./left-posts.component.scss']
})
export class LeftPostsComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription()
  public leftPosts: PostInterface[] = []

  constructor(
    private heroService: PostService
  ) { }

  ngOnInit(): void {
    this._subscription.add(
      this.heroService.getPostsLeftLayout().pipe(
        tap((posts) => this.leftPosts = posts)
      ).subscribe()
    )
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }
}
