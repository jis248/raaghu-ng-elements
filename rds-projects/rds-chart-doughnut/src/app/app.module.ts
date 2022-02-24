import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent as RdsChartDoughnut} from './app.component';

@NgModule({
  declarations: [
    RdsChartDoughnut
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [RdsChartDoughnut],
  providers: [],
  bootstrap: [environment.localDev ? RdsChartDoughnut : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsChartDoughnut, {
      injector: this.injector,
    });
    customElements.define('rds-chart-doughnut', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}