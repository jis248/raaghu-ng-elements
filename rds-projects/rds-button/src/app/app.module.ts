import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent as RdsbuttonComponent } from './app.component';
import { environment } from '../environments/environment.prod';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [RdsbuttonComponent],
  imports: [BrowserModule, AppRoutingModule],
  entryComponents: [RdsbuttonComponent],
  providers: [],
  bootstrap: [environment.localDev ? RdsbuttonComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsbuttonComponent, {
      injector: this.injector,
    });
    customElements.define('rds-button', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}

