import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  bootstrap: [RdsModal]
})
export class AppModule { }
