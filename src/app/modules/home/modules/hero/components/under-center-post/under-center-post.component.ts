import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, tap} from "rxjs";
import {PostInterface} from "../../interfaces/post.interface";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-under-center-post',
  templateUrl: './under-center-post.component.html',
  styleUrls: ['./under-center-post.component.scss']
})
export class UnderCenterPostComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription()
  public underPost!: PostInterface

  constructor(
    private heroService: PostService
  ) { }

  ngOnInit(): void {
    this._subscription.add(
      this.heroService.getPostUnderCenterLayout().pipe(
        tap((post) => this.underPost = post)
      ).subscribe()
    )
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }
}
