import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SearchableMultiSelectModule } from 'searchable-multi-select';  

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SearchableMultiSelectModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
