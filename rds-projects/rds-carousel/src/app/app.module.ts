import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent as RdsCarousel } from './app.component';
import { environment } from '../environments/environment.prod';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [RdsCarousel],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  entryComponents: [RdsCarousel],
  bootstrap: [environment.localDev ? RdsCarousel : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsCarousel, {
      injector: this.injector,
    });
    customElements.define('rds-carousel', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}

