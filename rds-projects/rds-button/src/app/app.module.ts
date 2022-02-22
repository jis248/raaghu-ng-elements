import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment.prod';
import { createCustomElement } from '@angular/elements';
import { RdsTileComponent } from '../../../rds-tile/src/app/rds-tile.component';

@NgModule({
  declarations: [RdsTileComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  entryComponents: [RdsTileComponent],
  bootstrap: [environment.localDev ? RdsTileComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsTileComponent, {
      injector: this.injector,
    });
    customElements.define('rds-button', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}

