import { Component, OnInit } from '@angular/core';
import { CaloriesService } from '../calories.service';

@Component({
  selector: 'app-timing-table',
  templateUrl: './timing-table.component.html',
  styleUrls: ['./timing-table.component.css']
})
export class TimingTableComponent implements OnInit {

  calories: any;

  constructor(private caloriesService: CaloriesService) { }

  ngOnInit() {
    this.caloriesService.getChanges().subscribe(newCalories => this.calories = newCalories);
  }

}
