import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieTableComponent } from './calorie-table.component';

describe('CalorieTableComponent', () => {
  let component: CalorieTableComponent;
  let fixture: ComponentFixture<CalorieTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalorieTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalorieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
