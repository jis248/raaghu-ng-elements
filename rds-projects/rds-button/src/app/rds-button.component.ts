import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rds-button',
  templateUrl: './rds-button.component.html',
  styleUrls: ['./rds-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  // Add the inputs and outputs for the component here
  // @Input() label: string;
  // @Input() type: 'primary' | 'secondary' | 'light' = 'primary';
  // @Input() size: 'sm' | 'md' | 'lg' = 'sm';
  // @Output() click = new EventEmitter<void>();

  // Configure the button styles based on the inputs
  // This logic will vary according to the component
  // get classes() {
  //   return [`btn-${this.type}`, `btn-${this.size}`].join(' ');
  // }


  @Input()
  colorType?: string;

  @Input()
  submit = false;

  @Input()
  backgroundColor?: string;

  @Input()
  borderColor?: string;

  @Input()
  color?: string;

  @Input()
  block = false;

  @Input()
  size?: string;

  @Input()
  disabled = false;

  @Input()
  outlineButton = false;

  @Input()
  roundedButton = false;

  @Input()
  toggleButton = false;

  @Input()
  iconClass?: string;

  @Input()
  label?: string;


  @Output()
  onClick = new EventEmitter<Event>();


  public get classes(): string {
    const outline = `${this.outlineButton ? 'btn btn-outline-' + this.colorType : 'btn btn-' + this.colorType}`;
    const mode = ` btn-${this.size === 'small' ? 'sm' : this.size === 'large' ? 'lg' : 'md'}`;
    const icon = `${this.roundedButton ? ' btn-icon' : ''}`;
    return outline + mode + icon;
  }

  public get width(): string{
     return this.block ? 'btn-block' : '';
  }

  public get buttonType(): string{
    return this.submit ? 'submit' : 'button';
 }

}
