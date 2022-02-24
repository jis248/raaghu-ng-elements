import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent as RdsAlert} from './app.component';

@NgModule({
  declarations: [
    RdsAlert
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RdsAlert]
})
export class AppModule { }
