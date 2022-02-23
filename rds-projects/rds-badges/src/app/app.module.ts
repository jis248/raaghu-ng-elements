import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { environment } from 'rds-projects/rds-badges/src/environments/environment';
import { createCustomElement } from '@angular/elements';
import { AppComponent as RdsBadgesComponent } from './app.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [RdsBadgesComponent],
  providers: [],
  bootstrap: [environment.localDev ? RdsBadgesComponent: []]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsBadgesComponent, {
      injector: this.injector,
    });
    customElements.define('rds-badges', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}

