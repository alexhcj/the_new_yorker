import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PuzzlesAndGamesService {

  constructor() { }

  getPuzzlesAndGames() {
    return of([
      {id: '1', name: 'Name Drop', summary: 'A quiz that tests your knowledge of notable people, published every weekday.', img: './assets/img/home/puzzles-and-games/1.png' },
      {id: '2', name: 'The Crossword', summary: 'A puzzle that ranges from lightly to considerably challenging, published every weekday.', img: './assets/img/home/puzzles-and-games/2.png' },
      {id: '3', name: 'The Cryptic Crossword', summary: 'A weekly puzzle for lovers of wily wordplay.', img: './assets/img/home/puzzles-and-games/3.png' },
      {id: '4', name: 'Caption Contest', summary: 'We provide a cartoon, you provide a caption.', img: './assets/img/home/puzzles-and-games/4.png' },
    ])
  }
}
