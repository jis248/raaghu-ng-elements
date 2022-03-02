import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'rds-colorpicker',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, ControlValueAccessor {
  title1 = 'rds-color-picker';
  @Input() value = '';
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() title: string;

  @Output() onItemClick = new EventEmitter<any>();

  onChange!: (value: string) => void;
  onTouched!: () => void;
  constructor() { }

  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  changedValue(event: any) {
    this.onItemClick.emit({ evnt: event, item: event.target.value });
    console.log(event.target.value);
    // this.onChange(event.target.value)
    // this.onTouched()

  }

  ngOnInit(): void {
  }
}
