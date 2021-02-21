import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakenewsdetectionComponent } from './fakenewsdetection.component';

describe('FakenewsdetectionComponent', () => {
  let component: FakenewsdetectionComponent;
  let fixture: ComponentFixture<FakenewsdetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakenewsdetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakenewsdetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
