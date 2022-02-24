import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent as RdsModal} from './app.component';

@NgModule({
  declarations: [
    RdsModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [environment.localDev ? RdsModal : []]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsModal, {
      injector: this.injector,
    });
    customElements.define('rds-modal', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}