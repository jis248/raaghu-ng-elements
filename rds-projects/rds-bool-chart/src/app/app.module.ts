import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent as RdsBoolChartComponent } from './app.component';

@NgModule({
  declarations: [
    RdsBoolChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [environment.localDev ? RdsBoolChartComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsBoolChartComponent, {
      injector: this.injector,
    });
    customElements.define('rds-bool-chart', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
