import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContributorsService {

  constructor() { }

  getContributors() {
    return of([
      {id: '1', img: './assets/img/home/contributors/1.png', author: 'Jon Lee Anderson', rubric: 'Daily Comment', title: 'The Future of the Amazon Depends on Brazil’s President-Elect'},
      {id: '2', img: './assets/img/home/contributors/2.png', author: 'Vinson Cunningham', rubric: 'The Theatre', title: '“My Broken Language” Reinvents the Memoir'},
      {id: '3', img: './assets/img/home/contributors/3.png', author: 'Jane Mayer', rubric: 'News Desk', title: 'A Rare Win in the Fight Against Dark Money'},
      {id: '4', img: './assets/img/home/contributors/4.png', author: 'The New Yorker', rubric: 'Under Review', title: 'The Best Books of 2022 So Far'},
      {id: '5', img: './assets/img/home/contributors/5.png', author: 'Jelani Cobb', rubric: 'Daily Comment', title: 'The Enduring Power of Trumpism'},
      {id: '6', img: './assets/img/home/contributors/6.png', author: 'Stephania Taladrid', rubric: 'The Political Scene', title: 'How Catherine Cortez Masto Won Nevada '},
      {id: '7', img: './assets/img/home/contributors/7.png', author: 'Andrew Marantz', rubric: 'The New Yorker Interview', title: 'Neal Brennan Longs for Connection'},
      {id: '8', img: './assets/img/home/contributors/8.png', author: 'Isaac Chotiner', rubric: 'Q. & A.', title: 'Probing Putin’s Ambitions After Nine Months of War'},
    ])
  }
}
