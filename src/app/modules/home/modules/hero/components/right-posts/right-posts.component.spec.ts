import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPostsComponent } from './right-posts.component';

describe('RightPostsComponent', () => {
  let component: RightPostsComponent;
  let fixture: ComponentFixture<RightPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
