import { Component, OnInit } from '@angular/core';
import {PuzzlesAndGamesService} from "../../modules/hero/services/puzzles-and-games.service";
import {Subscription, tap} from "rxjs";
import {PuzzleInterface} from "../../modules/hero/interfaces/puzzle.interface";
import {GameInterface} from "../../modules/hero/interfaces/game.interface";

@Component({
  selector: 'app-puzzles-and-games',
  templateUrl: './puzzles-and-games.component.html',
  styleUrls: ['./puzzles-and-games.component.scss']
})
export class PuzzlesAndGamesComponent implements OnInit {
  private _subscription: Subscription = new Subscription()
  public puzzlesAndGamesList: PuzzleInterface[] | GameInterface[] = []

  constructor(
    private puzzlesAndGamesService: PuzzlesAndGamesService
  ) { }

  ngOnInit(): void {
    this._subscription.add(
      this.puzzlesAndGamesService.getPuzzlesAndGames().pipe(
        tap((list) => this.puzzlesAndGamesList = list)
      ).subscribe()
    )
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }

}
