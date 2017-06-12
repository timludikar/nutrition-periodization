import { Component, EventEmitter, Output } from '@angular/core';
import { Profile } from 'nutrient-timing-library';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  submitted = false;
  imperial = false;
  model = new Profile();

  @Output() result = new EventEmitter<Profile>();

  onSubmit() { this.submitted = true; this.result.emit(this.model); }
  get diagnostic() { return JSON.stringify(this.model); }

  addHeight(val: number){
    if(this.imperial) this.model.height = +(val / 2.54);
    else this.model.height = +(val);
  }

  addWeight(val: number){
    if(this.imperial) this.model.weight = +(val / 2.2);
    else this.model.weight = +(val);
  }

}
