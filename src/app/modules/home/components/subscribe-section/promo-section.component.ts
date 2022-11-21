import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-promo-section',
  templateUrl: './promo-section.component.html',
  styleUrls: ['./promo-section.component.scss']
})
export class PromoSectionComponent implements OnInit {
  @Input() text!: string;
  @Input() imgSrc!: string;
  @Input() imgAlt!: string;
  @Input() buttonText!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
