import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent as RdsCheckbox } from './app.component';
import { environment } from '../environments/environment.prod';
import { createCustomElement } from '@angular/elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RdsCheckbox],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  entryComponents: [RdsCheckbox],
  bootstrap: [environment.localDev ? RdsCheckbox : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsCheckbox, {
      injector: this.injector,
    });
    customElements.define('rds-checkbox', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}

