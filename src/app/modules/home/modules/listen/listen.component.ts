import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, tap} from "rxjs";
import {ListenRecordInterface} from "./interfaces/listen-record.interface";
import {ListenService} from "./services/listen.service";

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.scss']
})
export class ListenComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription()
  public recordsList: ListenRecordInterface[] = []

  constructor(
    private listenService: ListenService
  ) { }

  ngOnInit(): void {
    this._subscription.add(
      this.listenService.getListenRecords().pipe(
        tap((records) => this.recordsList = records)
      ).subscribe()
    )
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }

}
