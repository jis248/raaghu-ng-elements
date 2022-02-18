import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // Add the inputs and outputs for the component here
  @Input() label: string;
  @Input() type: 'primary' | 'secondary' | 'light' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'sm';
  @Output() click = new EventEmitter<void>();

  // Configure the button styles based on the inputs
  // This logic will vary according to the component
  get classes() {
    return [`btn-${this.type}`, `btn-${this.size}`].join(' ');
  }
}
