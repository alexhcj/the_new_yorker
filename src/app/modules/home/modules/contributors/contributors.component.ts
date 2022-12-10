import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, tap} from "rxjs";
import {ContributorInterface} from "./interfaces/contributor.interface";
import {ContributorsService} from "./services/contributors.service";

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription()
  public contributorsList: ContributorInterface[] = []

  constructor(
    private contributorsService: ContributorsService
  ) { }

  ngOnInit(): void {
    this._subscription.add(
      this.contributorsService.getContributors().pipe(
        tap((contributors) => this.contributorsList = contributors)
      ).subscribe()
    )
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }
}
