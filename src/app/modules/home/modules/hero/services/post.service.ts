import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts() {
    return of([
      {id: '1', title: 'Some post title 1', body: 'This is simple body text of post', author: 'Masha Gessen', category: 'Daily comment', img: './assets/img/home/hero/1.png'},
      {id: '2', title: 'Some post title 2', body: 'This is simple body text of post', author: 'Masha Gessen', category: 'Daily comment', img: './assets/img/home/hero/2.png'},
    ])
  }

  getPostsRightLayout() {
    return of([
      {id: '1', title: 'Kyrie Irving and the Brooklyn Nets’ Dispiriting Saga', body: 'Some body text', author: 'Louisa Thomas', category: 'The sporting scene', img: './assets/img/home/right-posts/1.png'},
      {id: '2', title: 'Steven Spielberg’s “The Fabelmans” and the Madness of Love', body: 'On Donald Trump and the Democrats’ Not-So-Awful Election', author: 'Louisa Thomas', category: 'The current cinema', img: './assets/img/home/right-posts/2.png'},
      {id: '3', title: 'How “Education Freedom” Played in the Midterms', body: 'This is simple body text of post', author: 'Jessica Winter', category: 'Daily comment', img: './assets/img/home/right-posts/3.png'},
      {id: '3', title: 'Do We Have the History of Native Americans Backward?', body: 'This is simple body text of post', author: 'David Treuer', category: 'Books', img: './assets/img/home/right-posts/4.png'},
    ])
  }

  getPost() {
    return of(
      {id: '1', title: 'Some post title 1', body: 'This is simple body text of post', author: 'Masha Gessen', category: 'Daily comment', img: './assets/img/home/hero/3.png'},
    )
  }
}
