import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterPostComponent } from './center-post.component';

describe('CenterPostComponent', () => {
  let component: CenterPostComponent;
  let fixture: ComponentFixture<CenterPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
