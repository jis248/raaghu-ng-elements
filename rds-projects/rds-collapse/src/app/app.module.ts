import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [environment.localDev ? AppComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('rds-collapse', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}

