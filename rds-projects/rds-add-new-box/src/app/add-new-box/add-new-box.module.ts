import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddNewBoxComponent } from './add-new-box.component';

@NgModule({
  declarations: [AddNewBoxComponent],
  imports: [CommonModule, FormsModule],
  exports: [AddNewBoxComponent],
})
export class AddNewBoxModule { }
