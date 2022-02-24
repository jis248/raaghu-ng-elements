import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent as RdsCard } from './app.component';
import { environment } from 'rds-projects/rds-button/src/environments/environment';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    RdsCard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [RdsCard],
  bootstrap: [environment.localDev ? RdsCard : []]
})

export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsCard, {
      injector: this.injector,
    });
    customElements.define('rds-card', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
