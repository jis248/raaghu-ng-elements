import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'rds-projects/rds-datepicker/src/environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent as RdsChartingComponent } from './app.component';

@NgModule({
  declarations: [
    RdsChartingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [RdsChartingComponent],
  bootstrap: [environment.localDev ? RdsChartingComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsChartingComponent, {
      injector: this.injector,
    });
    customElements.define('rds-charting', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}