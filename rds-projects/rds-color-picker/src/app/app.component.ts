import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, ControlValueAccessor {
  title = 'rds-color-picker';
  @Input() value = '';

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
    // this.onChange(event.target.value)
    // this.onTouched()

  }

  ngOnInit(): void {
  }
}
