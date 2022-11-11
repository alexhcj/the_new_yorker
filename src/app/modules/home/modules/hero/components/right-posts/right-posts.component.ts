import { Component, OnInit } from '@angular/core';
import {Subscription, tap} from "rxjs";
import {PostInterface} from "../../interfaces/post.interface";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-right-posts',
  templateUrl: './right-posts.component.html',
  styleUrls: ['./right-posts.component.scss']
})
export class RightPostsComponent implements OnInit {
  private _subscription: Subscription = new Subscription()
  public rightPosts: PostInterface[] = []

  constructor(
    private heroService: PostService
  ) { }

  ngOnInit(): void {
    this._subscription.add(
      this.heroService.getPostsRightLayout().pipe(
        tap((posts) => this.rightPosts = posts)
      ).subscribe()
    )
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }

}
