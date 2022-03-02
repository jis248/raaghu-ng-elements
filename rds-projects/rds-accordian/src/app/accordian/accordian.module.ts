import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccordianComponent } from './accordian.component';
import { AccordionItemComponent } from '../accordian-item/accordion-item.component';

@NgModule({
  declarations: [AccordianComponent, AccordionItemComponent],
  imports: [CommonModule, FormsModule],
  exports: [AccordianComponent, AccordionItemComponent],
})
export class AccordianModule { }
