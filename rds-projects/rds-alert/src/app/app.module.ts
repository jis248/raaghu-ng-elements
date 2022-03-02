import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from './alert/alert.module';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AlertModule],
  entryComponents: [AlertComponent],
  providers: [],
  bootstrap: [environment.localDev ? AppComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(AlertComponent, {
      injector: this.injector,
    });
    customElements.define('rds-alert', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void { }
}

