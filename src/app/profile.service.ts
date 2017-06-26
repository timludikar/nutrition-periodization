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

  private changes: BehaviorSubject<Profile> = new BehaviorSubject(new Profile);

  constructor() {
    this.profile = new Profile();
  }

  updateProfile(update ?: initProfile){
    this.profile = new Profile(update);
    this.changes.next(this.profile);
  }

  getChanges(){
    return this.changes;
  }
}
