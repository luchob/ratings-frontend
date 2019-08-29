import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingStreamComponent } from './rating-stream.component';

describe('RatingStreamComponent', () => {
  let component: RatingStreamComponent;
  let fixture: ComponentFixture<RatingStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
