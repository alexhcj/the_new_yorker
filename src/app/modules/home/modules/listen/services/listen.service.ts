import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListenService {

  constructor() { }

  getListenRecords() {
    return of([
      {
        id: '1',
        title: 'J. Edgar Hoover, Public Enemy No. 1',
        summary: 'The F.B.I. director promised to save American democracy—while his secret programs subverted it from within.',
        body: 'This is simple body text of post',
        author: 'Margaret Talbot',
        rubric: 'Books',
        img: './assets/img/home/listen/1.png'
      },
      {
        id: '2',
        title: 'The New Yorker Relaunches Its Political Scene Podcast',
        summary: 'The magazine’s flagship politics show has expanded to three episodes per week, offering insight and analysis from the magazine’s writers and editors.',
        body: 'This is simple body text of post',
        author: 'The New Yorker',
        rubric: 'The Political Scene Podcast',
        img: './assets/img/home/listen/2.png'
      },
      {
        id: '3',
        title: 'Annie Ernaux Turns Memory Into Art',
        summary: 'Many authors write about their lives. Over nearly fifty years, the Nobel laureate has discovered new ways to do it.',
        body: 'This is simple body text of post',
        author: 'Alexandra Schwartz',
        rubric: 'Life and Letters',
        img: './assets/img/home/listen/3.png'
      },
      {
        id: '4',
        title: 'The Beautiful, Brutal World of Bonsai',
        summary: 'An American undergoes a gruelling apprenticeship to a Japanese master.',
        body: 'This is simple body text of post',
        author: 'Liza Batkin',
        rubric: 'Onward and Upward with the Arts',
        img: './assets/img/home/listen/4.png'
      }
    ])
  }
}
