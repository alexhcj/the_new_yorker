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

  getPost() {
    return of(
      {id: '1', title: 'Some post title 1', body: 'This is simple body text of post', author: 'Masha Gessen', category: 'Daily comment', img: './assets/img/home/hero/3.png'},
    )
  }
}
