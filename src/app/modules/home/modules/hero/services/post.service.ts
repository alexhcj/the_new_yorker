import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts() {
    return of([
      {id: '1', title: 'Some post title 1', summary: 'Some summary', body: 'This is simple body text of post', author: 'Masha Gessen', rubric: 'Daily comment', img: './assets/img/home/hero/1.png'},
      {id: '2', title: 'Some post title 2', summary: 'Some summary', body: 'This is simple body text of post', author: 'Masha Gessen', rubric: 'Daily comment', img: './assets/img/home/hero/2.png'},
    ])
  }

  getPostCenterLayout() {
    return of({
      id: '1', title: 'The Kingdom of Antonin Scalia', summary: 'This Supreme Court has embraced his doctrine of judicial modesty in an imperious fashion.', body: 'This is simple body text of post', author: 'Liza Batkin', rubric: 'Essay', img: './assets/img/home/center-posts/1.png'
    })
  }

  getPostUnderCenterLayout() {
    return of([
      {id: '2', title: '“Returns”', summary: '“She was breathless, as though she had no idea where to start among all the things we had to talk about.”', body: 'This is simple body text of post', author: 'Annie Ernaux', rubric: 'Fiction', img: './assets/img/home/center-posts/2.png'},
    ])
  }

  getPostsRightLayout() {
    return of([
      {id: '1', title: 'Kyrie Irving and the Brooklyn Nets’ Dispiriting Saga', summary: 'Some summary', body: 'Some body text', author: 'Louisa Thomas', rubric: 'The sporting scene', img: './assets/img/home/right-posts/1.png'},
      {id: '2', title: 'Steven Spielberg’s “The Fabelmans” and the Madness of Love', summary: 'Some summary', body: 'On Donald Trump and the Democrats’ Not-So-Awful Election', author: 'Louisa Thomas', rubric: 'The current cinema', img: './assets/img/home/right-posts/2.png'},
      {id: '3', title: 'How “Education Freedom” Played in the Midterms', summary: 'Some summary', body: 'This is simple body text of post', author: 'Jessica Winter', rubric: 'Daily comment', img: './assets/img/home/right-posts/3.png'},
      {id: '3', title: 'Do We Have the History of Native Americans Backward?', summary: 'Some summary', body: 'This is simple body text of post', author: 'David Treuer', rubric: 'Books', img: './assets/img/home/right-posts/4.png'},
    ])
  }

  getPost() {
    return of(
      {id: '1', title: 'Some post title 1', summary: 'Some summary', body: 'This is simple body text of post', author: 'Masha Gessen', rubric: 'Daily comment', img: './assets/img/home/hero/3.png'},
    )
  }
}
