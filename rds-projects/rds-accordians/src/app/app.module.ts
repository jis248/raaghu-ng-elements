import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent as RdsAccordion } from './app.component';
import { environment } from '../environments/environment.prod';
import { createCustomElement } from '@angular/elements';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@NgModule({
  declarations: [RdsAccordion,AccordionItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  exports: [AccordionItemComponent],
  providers: [],
  entryComponents: [RdsAccordion],
  bootstrap: [environment.localDev ? RdsAccordion : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsAccordion, {
      injector: this.injector,
    });
    customElements.define('rds-accordians', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
