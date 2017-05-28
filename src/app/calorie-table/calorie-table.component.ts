import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Calories } from '../calories';

@Component({
  selector: 'app-calorie-table',
  templateUrl: './calorie-table.component.html',
  styleUrls: ['./calorie-table.component.css']
})
export class CalorieTableComponent implements OnChanges {

  constructor() { }
  
  @Input() bmr: number;
  @Output() caloriesUpdate = new EventEmitter();
  calories: Calories = new Calories(this.bmr);

  weightPhases = [
    { name: "Weight Loss", value: -500 },
    { name: "Weight Maintain", value: 0 },
    { name: "Weight Gain", value: 500 }
  ];

  selectedPhase: string;

  ngOnChanges(val: any){
    this.calories = new Calories(this.bmr);
    this.caloriesUpdate.emit(this.calories);
  }

  onChange(val: number){
    this.calories = new Calories(this.bmr, val);
    this.caloriesUpdate.emit(this.calories);
  }

}
