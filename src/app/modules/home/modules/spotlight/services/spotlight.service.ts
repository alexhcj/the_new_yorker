import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpotlightService {

  constructor() { }

  getSpotlightPosts() {
    return of([
      {
        id: '1',
        title: 'Some post title 1',
        body: 'This is simple body text of post',
        author: 'Masha Gessen',
        category: 'Daily comment',
        img: './assets/img/home/spotlight/1.png'
      },
      {
        id: '2',
        title: 'Some post title 2',
        body: 'This is simple body text of post',
        author: 'Masha Gessen',
        category: 'Daily comment',
        img: './assets/img/home/spotlight/2.png'
      },
      {
        id: '3',
        title: 'Some post title 2',
        body: 'This is simple body text of post',
        author: 'Masha Gessen',
        category: 'Daily comment',
        img: './assets/img/home/spotlight/3.png'
      },
      {
        id: '4',
        title: 'Some post title 2',
        body: 'This is simple body text of post',
        author: 'Masha Gessen',
        category: 'Daily comment',
        img: './assets/img/home/spotlight/4.png'
      },
    ])
  }
}
