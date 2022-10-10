import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPostListComponent } from './section-post-list.component';

describe('SectionPostListComponent', () => {
  let component: SectionPostListComponent;
  let fixture: ComponentFixture<SectionPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPostListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
