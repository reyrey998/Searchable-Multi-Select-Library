import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'lib-searchable-multi-select',
  templateUrl: './searchable-multi-select.component.html',
  styleUrls: ['./searchable-multi-select.component.css']
})
export class SearchableMultiSelectComponent implements OnInit {
  selectedOptions = new FormControl([], Validators.required);

  searchCtrl = new FormControl('');

  options: string[] = ['امبولانس', 'سواری', 'تاکسی'];

  filteredOptions!: Observable<string[]>;

  isActive: boolean = false;  
  isDisabled: boolean = false;  

  ngOnInit() {
    this.filteredOptions = this.searchCtrl.valueChanges.pipe(
      startWith(''),  
      map(value => this._filter(value || ''))  
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();  
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onActivate() {
    this.isActive = true;
  }

  onDeactivate() {
    this.isActive = false;
  }

  // Remove an option from the selected options list
  removeOption(option: string) {
    const options = this.selectedOptions?.value as string[];  // Assert value as a string array
    if (Array.isArray(options)) {
      const index = options.indexOf(option);
      if (index >= 0) {
        options.splice(index, 1);  // Remove option from selected list
        this.selectedOptions.updateValueAndValidity();  // Update the form control's validity
      }
    }
  }
  
  
  // Getter to check if the form control is valid (for green border state)
  get isValid() {
    return this.selectedOptions.valid;
  }
}
