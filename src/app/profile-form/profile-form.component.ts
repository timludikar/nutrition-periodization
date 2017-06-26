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
  imperial = false;
  profile: Profile;

  @Output() result: EventEmitter<Profile> = new EventEmitter();

  constructor(private profileService: ProfileService){}

  ngOnInit(){
    this.profileService.getChanges().subscribe(newProfile => {
      this.profile = newProfile;
    });
  }

  onSubmit() { this.submitted = true; this.result.emit(this.profile); }

  get diagnostic() { return JSON.stringify(this.profile); }

  addHeight(val: number){
    if(this.imperial) this.profile.height = +(val / 2.54);
    else this.profile.height = +(val);
  }

  addWeight(val: number){
    if(this.imperial) this.profile.weight = +(val / 2.2);
    else this.profile.weight = +(val);
  }

}
