import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment.prod';
import { createCustomElement } from '@angular/elements';
import { AppComponent as RdsNavbarComponent } from './app.component';

@NgModule({
  declarations: [RdsNavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  entryComponents: [RdsNavbarComponent],
  bootstrap: [environment.localDev ? RdsNavbarComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsNavbarComponent, {
      injector: this.injector,
    });
    customElements.define('rds-nav-bar', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
