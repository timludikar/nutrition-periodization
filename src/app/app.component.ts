import { Component } from '@angular/core';
import { ProfileService } from './profile.service';

import Nutrient from 'nutrient-timing-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nutrition Schedule';

  constructor(private profileService: ProfileService){}

  onProfileUpdate($event){
    this.profileService.updateProfile($event);
  }
}
