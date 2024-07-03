import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDurationComponent } from './date-duration.component';

describe('DateDurationComponent', () => {
  let component: DateDurationComponent;
  let fixture: ComponentFixture<DateDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateDurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
