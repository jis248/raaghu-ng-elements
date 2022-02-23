import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RdsNavTabComponent } from './RdsNavTab.component';
import { createCustomElement } from '@angular/elements';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [RdsNavTabComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  entryComponents: [RdsNavTabComponent],
  bootstrap: [environment.localDev ? RdsNavTabComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsNavTabComponent, {
      injector: this.injector,
    });
    customElements.define('rds-nav-tab', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {}
}
