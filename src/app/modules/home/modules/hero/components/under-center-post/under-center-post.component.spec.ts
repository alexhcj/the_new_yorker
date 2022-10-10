import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderCenterPostComponent } from './under-center-post.component';

describe('UnderCenterPostComponent', () => {
  let component: UnderCenterPostComponent;
  let fixture: ComponentFixture<UnderCenterPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderCenterPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderCenterPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
