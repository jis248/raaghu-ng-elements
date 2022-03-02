import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, FormsModule],
  exports: [AlertComponent],
})
export class AlertModule { }
