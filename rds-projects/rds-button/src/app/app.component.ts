import { DOCUMENT } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewEncapsulation, Renderer2, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

  constructor( private _renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document){

  }
  @Input()
  type: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark' = 'primary';

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
  size: 'small' | 'large' | 'medium' = 'medium';

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
  @Input()
  tooltipTitle =  '';
  @Input()
  tooltipPosition: 'top' | 'bottom' | 'right' | 'left' = 'bottom';

  @Output()
  onClick = new EventEmitter<Event>();

  ngAfterViewInit(): void {

    // tslint:disable-next-line:prefer-const
    let script = this._renderer2.createElement('script');
    script.text = `
                var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
                var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                  return new bootstrap.Tooltip(tooltipTriggerEl)
                })

                `;
    this._renderer2.appendChild(this._document.body, script);
  }

  public get classes(): string {
    const outline = `${this.outlineButton ? 'btn btn-outline-' + this.type : 'btn btn-' + this.type}`;
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

 public get active(): string{
  return this.tooltipTitle !== '' ? 'tooltip' : this.toggleButton ? 'button' : '';
}
}
