import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
     schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
