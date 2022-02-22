import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { RdsNewBoxComponent } from './rds-new-box.component';

@NgModule({
  declarations: [
    RdsNewBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [RdsNewBoxComponent],
  bootstrap: [environment.localDev ? RdsNewBoxComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsNewBoxComponent, {
      injector: this.injector,
    });
    customElements.define('rds-new-box', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
