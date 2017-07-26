import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Models, Services } from 'nutrient-timing-library';


@Component({
  selector: 'app-bmr-calculator',
  templateUrl: './bmr-calculator.component.html',
  styleUrls: ['./bmr-calculator.component.css']
})
export class BmrCalculatorComponent implements OnInit {

  calories = new Models.Calories();
  BMR: Models.BMR;
  phases = [{ key: 'lose', value: -500 }, { key: 'maintain', value: 0 }, { key:'gain', value: 500 }];
  selectedPhase = { key: 'maintain', value: 0 };

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getChanges().subscribe(newProfile => {
      this.BMR = Services.bmr.calculate(newProfile);
      this.calories = this.calories.calculate(this.BMR).adjustment(this.selectedPhase.value);
    });
  }

  get diagnostic() { return JSON.stringify(this.calories); }

  onSelectionChange(val: Object){
    this.selectedPhase = Object.assign({}, this.selectedPhase, val);
    this.calories.calculate(this.BMR).adjustment(this.selectedPhase.value);
  }
}