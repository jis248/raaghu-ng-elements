import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from './button/button.module';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule],
  entryComponents: [ButtonComponent],
  providers: [],
  bootstrap: [environment.localDev ? AppComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(ButtonComponent, {
      injector: this.injector,
    });
    customElements.define('rds-button', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void { }
}

