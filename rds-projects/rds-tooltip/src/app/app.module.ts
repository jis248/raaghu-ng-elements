import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RdsTooltipComponent } from './rds-tooltip.component';
import { environment } from '../environments/environment.prod';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    RdsTooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [RdsTooltipComponent],
  bootstrap: [environment.localDev ? RdsTooltipComponent : []]
})

export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsTooltipComponent, {
      injector: this.injector,
    });
    customElements.define('rds-tooltip', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
