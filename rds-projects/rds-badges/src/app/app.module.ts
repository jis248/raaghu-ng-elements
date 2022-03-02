import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { environment } from 'rds-projects/rds-badges/src/environments/environment';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: [environment.localDev ? AppComponent : []]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('rds-badges', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}

