import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import { RdsBigNumberWidgetComponent } from './rds-big-number-widget.component';

@NgModule({
  declarations: [
    RdsBigNumberWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [environment.localDev ? RdsBigNumberWidgetComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsBigNumberWidgetComponent, {
      injector: this.injector,
    });
    customElements.define('rds-big-number-widget', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}

