import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PuzzlesAndGamesService {

  constructor() { }

  getPuzzlesAndGames() {
    return of([
      {id: '1', name: 'Game name 1', description: 'Some game description' },
      {id: '2', name: 'Game name 2', description: 'Some game description' },
      {id: '3', name: 'Game name 3', description: 'Some game description' },
      {id: '4', name: 'Game name 4', description: 'Some game description' },
    ])
  }

  getPuzzleOrGame() {
    return of(
    {id: '1', title: 'Game name 1', description: 'Some game description' },
    )
  }
}
