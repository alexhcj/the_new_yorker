import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzlesAndGamesComponent } from './puzzles-and-games.component';

describe('PuzzlesAndGamesComponent', () => {
  let component: PuzzlesAndGamesComponent;
  let fixture: ComponentFixture<PuzzlesAndGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzlesAndGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuzzlesAndGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
