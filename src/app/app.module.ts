import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

import {  MdCardModule, 
          MdInputModule,
          MdRadioModule,
          MdButtonModule,
          MdSelectModule,
          MdListModule } from '@angular/material';
import { UnitsPipe } from './units.pipe';
import { ProfileService } from './profile.service';
import { BmrCalculatorComponent } from './bmr-calculator/bmr-calculator.component';
import { TruncatePipe } from './truncate.pipe';

const appRoutes: Routes = [
  { path: 'profile', component: ProfileFormComponent },
  { path: 'calories', component: BmrCalculatorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileFormComponent,
    UnitsPipe,
    BmrCalculatorComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdInputModule,
    MdRadioModule,
    MdButtonModule,
    MdListModule,
    MdSelectModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ) 
  ],
  providers: [
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
