import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent as RdsTileComponent } from './app.component';

@NgModule({
  declarations: [
    RdsTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [RdsTileComponent],
  bootstrap: [environment.localDev ? RdsTileComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsTileComponent, {
      injector: this.injector,
    });
    customElements.define('rds-tile', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
