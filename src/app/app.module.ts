import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

import { UnitsPipe } from './units.pipe';
import { ProfileService } from './profile.service';
import { CaloriesService } from './calories.service';
import { BmrCalculatorComponent } from './bmr-calculator/bmr-calculator.component';
import { TruncatePipe } from './truncate.pipe';
import { TimingTableComponent } from './timing-table/timing-table.component';

const appRoutes: Routes = [
  { path: 'profile', component: ProfileFormComponent },
  { path: 'calories', component: BmrCalculatorComponent },
  { path: 'timing', component: TimingTableComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileFormComponent,
    UnitsPipe,
    BmrCalculatorComponent,
    TruncatePipe,
    TimingTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ) 
  ],
  providers: [
    ProfileService,
    CaloriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
