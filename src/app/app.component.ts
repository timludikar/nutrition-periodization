import { Component } from '@angular/core';

import Nutrient from 'nutrient-timing-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nutrition Schedule';
  profile: Nutrient.Profile;

  onProfileUpdate($profile){
    this.profile = $profile;
  }
}
