import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Bmr } from '../bmr';

@Component({
  selector: 'app-calorie-calculator',
  templateUrl: './calorie-calculator.component.html',
  styleUrls: ['./calorie-calculator.component.css']
})
export class CalorieCalculatorComponent implements OnInit {
  constructor() { }
  title: string = "BMR";
  bmr: Bmr;

  sexSelector: string;
  sexes = [
    "Male",
    "Female"
  ]

  ngOnInit(){}

  @Output() bmrChange = new EventEmitter<number>();

  calculateBMR(form: NgForm) {
    var result: number;
    let sex = form.value.sex == "Male" ? "m" : "f";
    this.bmr = new Bmr(
      form.value.height,
      form.value.weight,
      form.value.age,
      sex
    );

    this.bmrChange.emit(this.bmr.calculate);
  }

}
