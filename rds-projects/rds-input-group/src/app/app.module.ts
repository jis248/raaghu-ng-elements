import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { LazyElementsModule } from '@angular-extensions/elements';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyElementsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppComponent],
  bootstrap: [environment.localDev ? AppComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('rds-input-group', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}