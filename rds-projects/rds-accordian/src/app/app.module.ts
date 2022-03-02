import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment.prod';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { AccordianModule } from './accordian/accordian.module';
import { AccordianComponent } from './accordian/accordian.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AccordianModule],
  providers: [],
  entryComponents: [AccordianComponent],
  bootstrap: [environment.localDev ? AppComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(AccordianComponent, {
      injector: this.injector,
    });
    customElements.define('rds-accordian', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
