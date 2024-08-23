import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchableMultiSelectComponent } from './searchable-multi-select.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';  
import { MatIconModule } from '@angular/material/icon';    
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectChange } from '@angular/material/select';

@NgModule({
  declarations: [SearchableMultiSelectComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatOptionModule,
    MatChipsModule,     
    MatIconModule,     
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule, 
    
  ],
  exports: [SearchableMultiSelectComponent]
})
export class SearchableMultiSelectModule { }
