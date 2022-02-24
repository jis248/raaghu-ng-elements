import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent as RdsGetingStartedComponent } from './app.component';

@NgModule({
  declarations: [
    RdsGetingStartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [environment.localDev ? RdsGetingStartedComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsGetingStartedComponent, {
      injector: this.injector,
    });
    customElements.define('rds-geting-started', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
