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
        title: 'Jon Fosse’s Search for Peace',
        summary: 'The Norwegian author has spent decades producing a strange, revered body of work. But he still doesn’t know where the writing comes from.',
        body: 'This is simple body text of post',
        author: 'Merve Emre',
        rubric: 'The New Yorker Interview',
        img: './assets/img/home/spotlight/1.png'
      },
      {
        id: '2',
        title: 'Vogue, But for Trumpers',
        summary: 'The founders of an online magazine that aims to be a right-wing blend of Goop and Cosmopolitan debrief the midterms’ best looks and biggest disappointments.',
        body: 'This is simple body text of post',
        author: 'Antonia Hitchens',
        rubric: 'Wind On Capitol Hill',
        img: './assets/img/home/spotlight/2.png'
      },
      {
        id: '3',
        title: 'Counting Through Conspiracy Theories in Arizona’s Midterms',
        summary: 'Equipment malfunctioned at polling places in Maricopa County, a hotbed of election denialism. Would local officials be able to reassure the public?',
        body: 'This is simple body text of post',
        author: 'Rachel Monroe',
        rubric: 'The Political Scene',
        img: './assets/img/home/spotlight/3.png'
      },
      {
        id: '4',
        title: 'The Kingdom of Antonin Scalia',
        summary: 'This Supreme Court has embraced his doctrine of judicial modesty in an imperious fashion.',
        body: 'This is simple body text of post',
        author: 'Liza Batkin',
        rubric: 'Essay',
        img: './assets/img/home/spotlight/4.png'
      },
      {
        id: '5',
        title: 'The Case for Quitting Elon Musk’s Twitter',
        summary: '...and for staying.',
        body: 'This is simple body text of post',
        author: 'Kyle Chayka',
        rubric: 'Infinite Scroll',
        img: './assets/img/home/spotlight/5.png'
      },
      {
        id: '6',
        title: 'Nate Cohn Explains Why This Year’s Midterms Broke the Mold',
        summary: 'The Times’ polling guru digs into what we know so far about which issues motivated voters, and what he hopes to learn in the coming months.',
        body: 'This is simple body text of post',
        author: 'Isaac Chotiner',
        rubric: 'q&a',
        img: './assets/img/home/spotlight/6.png'
      },
      {
        id: '7',
        title: 'Another Round for “Don’t Get Around Much Anymore”',
        summary: 'The reissue of “Breakdowns: Portrait of the Artist as a Young %@&*!” includes an analysis of a comic strip that feels as fresh now as it did decades ago.',
        body: 'This is simple body text of post',
        author: ['Françoise Mouly', 'Art Spiegelman'],
        rubric: 'Culture Desk',
        img: './assets/img/home/spotlight/7.png'
      },
      {
        id: '8',
        title: 'Roe Ethridge’s Slippery Art and Commerce',
        summary: 'In a new career survey, “American Polychronic,” two sides of the photographer’s career inform, spark, and subvert each other.',
        body: 'This is simple body text of post',
        author: 'Vince Aletti',
        rubric: 'Photo Booth',
        img: './assets/img/home/spotlight/8.png'
      },
    ])
  }
}
