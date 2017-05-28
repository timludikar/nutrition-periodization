import { Component } from '@angular/core';
import { Calories } from './calories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nutrition Schedule';
  bmrChange: number = 0;
  calories: Calories;

  ngOnChange(val: number){
    this.bmrChange = val;
  }

  caloriesUpdate(val: Calories){
    this.calories = val;
  }
}
