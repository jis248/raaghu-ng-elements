import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent as GetStartedComponent } from './app.component';

@NgModule({
  declarations: [
    GetStartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
   bootstrap: [environment.localDev ? GetStartedComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(GetStartedComponent, {
      injector: this.injector,
    });
    customElements.define('get-started', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
