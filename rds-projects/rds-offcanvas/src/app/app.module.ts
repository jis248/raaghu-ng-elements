import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent as RdsOffcanvasComponent } from './app.component';
@NgModule({
  declarations: [
    RdsOffcanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [environment.localDev ? RdsOffcanvasComponent : []]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsOffcanvasComponent, {
      injector: this.injector,
    });
    customElements.define('rds-offcanvas', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}