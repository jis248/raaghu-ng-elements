import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { rdsdDopdown } from './rds-dropdown.component';

@NgModule({
  declarations: [rdsdDopdown],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  entryComponents: [rdsdDopdown],
  bootstrap: [environment.localDev ? rdsdDopdown : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(rdsdDopdown, {
      injector: this.injector,
    });
    customElements.define('rds-dropdown', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
