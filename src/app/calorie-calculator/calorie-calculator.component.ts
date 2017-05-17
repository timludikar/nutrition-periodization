import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-calorie-calculator',
  templateUrl: './calorie-calculator.component.html',
  styleUrls: ['./calorie-calculator.component.css']
})
export class CalorieCalculatorComponent implements OnInit {
  constructor() { }
  client: Client = new Client();
  phaseSelected: string;
  phases = [
    {value: 'cut-weight', viewValue: 'Cut'},
    {value: 'maintain-weight', viewValue: 'Maintain'},
    {value: 'gain-weight', viewValue: 'Gain'}
  ];
  calories: number = 0;

  ngOnInit() {}

  updateWeight(value: number) {
    this.client.weight = value;
    this.client.update();
  }

  updateActivity(value: number) {
    this.client.activity = value;
    this.client.update();
  }

  updatePhase() {
    switch(this.phaseSelected){
      case 'cut-weight': 
        this.calories = this.client.baseCalories - 500;
        break;
      case 'gain-weight':
        this.calories = this.client.baseCalories + 500;
        break;
      default:
        this.calories = this.client.baseCalories;
    }
    this.client.update();
    
  }

}
