import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Profile } from 'nutrient-timing-library';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  submitted = false;
  imperial = true;
  profile: Profile;

  constructor(private profileService: ProfileService){}

  ngOnInit(){
    this.profileService.getChanges().subscribe(newProfile => {
      this.profile = newProfile;
    });
  }

  onSubmit() { this.submitted = true; this.profileService.updateProfile(this.profile); }

  get diagnostic() { return JSON.stringify(this.profile); }

  addHeight(val: number){
    this.profile.height = +(val);
  }

  addWeight(val: number){
    this.profile.weight = +(val);
  }

}
