import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'rds-input-group',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rds-input-group';
  @Input() inpuGroupSize: 'sm' | 'md' | 'lg' = 'sm';
  get classes() {
    return `input-group-${this.inpuGroupSize}`;
  }

}

