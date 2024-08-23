import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'lib-searchable-multi-select',
  templateUrl: './searchable-multi-select.component.html',
  styleUrls: ['./searchable-multi-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchableMultiSelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SearchableMultiSelectComponent),
      multi: true
    }
  ]
})
export class SearchableMultiSelectComponent implements ControlValueAccessor, Validator, OnInit {
  @Input() label: string = 'کاربری های مجاز جایگاه';
  @Input() options: string[] = [];
  @Input() isDisabled: boolean = false;  // Fixed the input property name

  selectedOptions: FormControl<string[] | null> = new FormControl([]);
  searchCtrl: FormControl<string | null> = new FormControl('');
  filteredOptions!: Observable<string[]>;

  isActive: boolean = false;

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

  removeOption(option: string, event: MouseEvent) {
    event.stopPropagation();
    if (!this.isDisabled) { // Disable interaction if isDisabled is true
      const options = this.selectedOptions?.value as string[];
      if (Array.isArray(options)) {
        const index = options.indexOf(option);
        if (index >= 0) {
          options.splice(index, 1);
          this.selectedOptions.setValue([...options]);
          this.selectedOptions.updateValueAndValidity();
        }
      }
    }
  }

  writeValue(obj: any): void {
    if (obj) {
      this.selectedOptions.setValue(obj as string[]);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    if (isDisabled) {
      this.selectedOptions.disable({ emitEvent: false });
    } else {
      this.selectedOptions.enable({ emitEvent: false });
    }
  }

  validate(control: FormControl) {
    return this.selectedOptions.valid ? null : { invalid: true };
  }

  private onChange = (value: any) => {};
  private onTouched = () => {};
}
