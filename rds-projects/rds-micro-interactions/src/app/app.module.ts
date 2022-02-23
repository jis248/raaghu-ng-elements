import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent as MicroInteractionsComponent } from './app.component';

@NgModule({
  declarations: [MicroInteractionsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [MicroInteractionsComponent],
})
export class AppModule {}
