import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import { RdsPopoverComponent } from './rdsPopover.component';
@NgModule({
  declarations: [
    RdsPopoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [environment.localDev ? RdsPopoverComponent : []]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsPopoverComponent, {
      injector: this.injector,
    });
    customElements.define('rds-popover', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}