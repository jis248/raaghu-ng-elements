import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent as RdsListGroupComponent } from './app.component';
@NgModule({
  declarations: [
    RdsListGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [environment.localDev ? RdsListGroupComponent : []]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsListGroupComponent, {
      injector: this.injector,
    });
    customElements.define('rds-list-group', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}