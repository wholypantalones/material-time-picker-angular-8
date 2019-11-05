import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { MaterialTimePickerModule } from "./material-timepicker/material-time-picker.module";

import { MatCardModule } from "@angular/material";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialTimePickerModule,
    MatCardModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
