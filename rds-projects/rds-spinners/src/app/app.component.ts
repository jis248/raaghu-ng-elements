import { Component, Input } from '@angular/core';

@Component({
  selector: 'rds-spinner',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'rds-spinners';
@Input() spinnerType= false;

// @Input()
// Color?: string;

@Input()  size: 'sm' | 'md'  = 'md';

@Input()
  colors: 'text-primary' | 'text-secondary' | 'text-success' | 'text-danger' | 'text-warning' | 'text-info' | 'text-light' | 'text-dark' = 'text-primary';

  public get classes(): string {
    const border =  `${this.spinnerType ? 'spinner-grow ' + this.colors : 'spinner-border ' + this.colors} `;
    const size = `spinner-border-${this.size}`

    return border+size;
  }
}
