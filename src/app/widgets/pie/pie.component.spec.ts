import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PieComponent } from './pie.component';

describe('PieComponent', () => {
  let component: PieComponent;
  let fixture: ComponentFixture<PieComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
