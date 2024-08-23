import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myControl = new FormControl([]);
  isDisabled = false;
  options = ['امبولانس', 'سواری', 'تاکسی'];
  label = 'کاربری های مجاز جایگاه'; // Dynamic label

  toggleDisable() {
    this.isDisabled = !this.isDisabled;
  }
}
