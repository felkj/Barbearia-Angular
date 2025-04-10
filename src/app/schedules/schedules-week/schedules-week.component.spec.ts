import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesWeekComponent } from './schedules-week.component';

describe('SchedulesWeekComponent', () => {
  let component: SchedulesWeekComponent;
  let fixture: ComponentFixture<SchedulesWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulesWeekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulesWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
