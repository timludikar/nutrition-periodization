import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Models } from 'nutrient-timing-library';

@Injectable()
export class CaloriesService {
  private calorie: Models.Calories;
  private BMR: number;

  private changes: BehaviorSubject<Models.Calories> = new BehaviorSubject(new Models.Calories());

  create(bmr ?: number){
    this.BMR = bmr;
    this.calorie = new Models.Calories().calculate(this.BMR);
    this.changes.next(this.calorie);
  }

  adjust(amount: number){
    this.calorie = new Models.Calories().calculate(this.BMR).adjustment(amount);
    this.changes.next(this.calorie);
  }

  getChanges(){
    return this.changes;
  }

  constructor() { }

}
