import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator';
import { OperationService } from './services/operationService';

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, CalculatorComponent],
  providers: [OperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
