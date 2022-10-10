import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPostsComponent } from './left-posts.component';

describe('LeftPostsComponent', () => {
  let component: LeftPostsComponent;
  let fixture: ComponentFixture<LeftPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
