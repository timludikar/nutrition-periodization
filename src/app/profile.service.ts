import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Profile } from 'nutrient-timing-library';

type initProfile = {
  firstName ?: string,
  lastName ?: string,
  height ?: number,
  weight ?: number,
  sex ?: string,
  age ?: number,
}

@Injectable()
export class ProfileService {
  private profile: Profile;

  private changes: BehaviorSubject<Profile> = new BehaviorSubject(new Profile({
      firstName: "Tim",
      lastName: "Ludikar",
      age: 32,
      sex: "m",
      height: 187.96,
      weight: 97.73
    }));

  constructor() {}

  updateProfile(update ?: initProfile){
    this.profile = new Profile(update);
    this.changes.next(this.profile);
  }

  addWeight(val: number, imperial: boolean = false){
    if(imperial) this.profile.addWeightInKg(val);
    else this.profile.weight = val;
  }

  getChanges(){
    return this.changes;
  }
}
