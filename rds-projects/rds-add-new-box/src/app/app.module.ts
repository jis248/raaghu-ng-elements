import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewBoxModule } from './add-new-box/add-new-box.module';
import { AddNewBoxComponent } from './add-new-box/add-new-box.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddNewBoxModule
  ],
  entryComponents: [AddNewBoxComponent],
  providers: [],
  bootstrap: [environment.localDev ? AppComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(AddNewBoxComponent, {
      injector: this.injector,
    });
    customElements.define('rds-add-new-box', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
