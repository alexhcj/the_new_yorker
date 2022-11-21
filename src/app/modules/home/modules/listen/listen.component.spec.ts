import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenComponent } from './listen.component';

describe('SpotlightComponent', () => {
  let component: ListenComponent;
  let fixture: ComponentFixture<ListenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
