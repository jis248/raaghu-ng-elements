import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent as RdsStackedChartComponent } from './app.component';

@NgModule({
  declarations: [
    RdsStackedChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RdsStackedChartComponent]
})
export class AppModule { }
