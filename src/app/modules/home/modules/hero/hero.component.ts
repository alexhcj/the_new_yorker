import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(
    ) { }

  ngOnInit(): void {
  }

}

// first stage
// TODO: Admin. add get & put methods for each post
// TODO: Admin. availability to add post by schedule

// second stage
// TODO: Admin. adaptive grid. Admin could change posts position
// TODO: Admin. availability to change center post. may be another posts
// TODO: AI personal tastes news, categories (right posts)
