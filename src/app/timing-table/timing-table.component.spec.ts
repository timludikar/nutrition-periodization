import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingTableComponent } from './timing-table.component';

describe('TimingTableComponent', () => {
  let component: TimingTableComponent;
  let fixture: ComponentFixture<TimingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
