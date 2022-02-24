import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent as RdsAddNewBoxComponent } from './app.component';

@NgModule({
  declarations: [
    RdsAddNewBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [environment.localDev ? RdsAddNewBoxComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsAddNewBoxComponent, {
      injector: this.injector,
    });
    customElements.define('rds-add-new-box', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
