import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

import {  MdCardModule, 
          MdInputModule,
          MdRadioModule,
          MdButtonModule,
          MdSelectModule,
          MdListModule } from '@angular/material';
import { UnitsPipe } from './units.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileFormComponent,
    UnitsPipe
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
    MdSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
