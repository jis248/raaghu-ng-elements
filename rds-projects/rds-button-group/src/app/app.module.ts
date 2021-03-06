import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment.prod';
import { createCustomElement } from '@angular/elements';
import { RdsButtonGroupComponent } from './rds-btn-group.component';

@NgModule({
  declarations: [RdsButtonGroupComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  entryComponents: [RdsButtonGroupComponent],
  bootstrap: [environment.localDev ? RdsButtonGroupComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsButtonGroupComponent, {
      injector: this.injector,
    });
    customElements.define('rds-button-group', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}

