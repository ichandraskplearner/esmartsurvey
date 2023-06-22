import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioListComponent } from './components/radio-checkbox-list/radio-list.component';
import { TextAreaCompComponent } from './components/text-area-comp/text-area-comp.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RadioListComponent,
    TextAreaCompComponent,
    SurveyFormComponent,
    DropdownListComponent
  ],
  imports: [    
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
