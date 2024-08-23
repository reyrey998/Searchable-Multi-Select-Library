import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SearchableMultiSelectComponent } from './searchable-multi-select.component';

@NgModule({
  declarations: [SearchableMultiSelectComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [SearchableMultiSelectComponent]
})
export class SearchableMultiSelectModule { }
