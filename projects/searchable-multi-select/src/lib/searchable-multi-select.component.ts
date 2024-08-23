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
  // Form control for selected options with validation
  selectedOptions = new FormControl([], Validators.required);

  // Form control for search input
  searchCtrl = new FormControl('');

  // List of available options
  options: string[] = ['امبولانس', 'سواری', 'تاکسی'];

  // Filtered options based on search input
  filteredOptions!: Observable<string[]>;

  // States
  isActive: boolean = false;  // Input field active state
  isDisabled: boolean = false;  // Disabled state

  ngOnInit() {
    // Initialize the filtered options based on the search control's value changes
    this.filteredOptions = this.searchCtrl.valueChanges.pipe(
      startWith(''),  // Start with an empty string for initial display
      map(value => this._filter(value || ''))  // Call the filter method
    );
  }

  // Method to filter options based on search input
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();  // Convert input to lowercase for case-insensitive filtering
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  // Handle activation of input field (focus event)
  onActivate() {
    this.isActive = true;
  }

  // Handle deactivation of input field (blur event)
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
