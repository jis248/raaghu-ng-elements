import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AppComponent,
      multi: true,
    },
  ],
})
export class AppComponent implements OnInit, ControlValueAccessor {
  onChange!: (value: string[]) => void;
  onTouched!: () => void;

  value = '';
  @Input()
  size?: string;

  @Input()
  label = 'Single file upload';

  @Input()
  multipleFiles = false;

  @Input() maxfilesize?: any = 5;
  
  result: string = '';
  errorMsg: boolean = false;
  fileName: string = '';
  fileSize?: number;
  errorSizeInKb?: number;
  fileType?: string = '';

  @Input() role: 'default' | 'fileUpload' = 'default';

  @Output() click = new EventEmitter<any>();
  @Output() onItemClick = new EventEmitter<any>();

  constructor() {}
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {}

  getValue(event: any) {
    this.onChange(event.target.files);
    this.onTouched();
  }

  public get classes(): string[] {
    var classList = ['form-control'];

    if (this.size === 'small') {
      var selectSize = 'form-control-sm';
      classList.push(selectSize);
    } else if (this.size === 'large') {
      var selectSize = 'form-control-lg';
      classList.push(selectSize);
    } else {
      var selectSize = '';
      classList.push(selectSize);
    }

    return classList;
  }
}
