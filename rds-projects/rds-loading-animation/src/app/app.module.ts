import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import { RdsLoadingAnimationComponent } from './rdsLoadingAnimation.component';

@NgModule({
  declarations: [
    RdsLoadingAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [RdsLoadingAnimationComponent],
  bootstrap: [environment.localDev ? RdsLoadingAnimationComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(RdsLoadingAnimationComponent, {
      injector: this.injector,
    });
    customElements.define('rds-loading-animation', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}