import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'rds-input-group',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rds-input-group';
  @Input() inpuGroupSize: 'sm' | 'md' | 'lg' = 'sm';
  @Output() click = new EventEmitter<void>();
  @Output() select = new EventEmitter();
  @Input() DropdownItems!: TemplateRef<any>
  @Input() inputGroupItem = [
    {
      displayName: '$',
      type: 'label'
    },
    {
      type: 'radio',
      disabled: false,
      value: true

    },
    {
      type: 'text',
      disabled: false,
      placeholder: 'sample',
      value: ''
    },
    {
      type: 'button',
      label: 'Label',
      buttonType: 'primary',
      size: 'sm',
      link : 'http://localhost:3000/rds-button/main.js'
    },
    {
      type: 'select',
      disabled: false,
      multiple: false,
      listItems: [{ value: 'India', some: 'value' }, { value: 'USA' }, { value: 'Canada' }],
      size: 'sm'
    },
    {
      displayName: 'Dropdown',
      buttonType: 'secondary',
      type: 'dropdown',
      disabled: false,
      listItems: [{ value: 'India', some: 'value' }, { value: 'USA' }, { value: 'Canada' }],
      size: 'sm'
    }
  ];



  onSelect(event: any) {
    this.onChange(event.target.value)
    this.onTouched()
  }

  getSelectClass(item: any): string {
    return `form-select-${item.size}`
  }
  onCheckboxChange(event: any) {
    this.onChange(event.target.value)
    this.onTouched()
  }
  onRadioChange(event: any) {
    this.onChange(event.target.value)
    this.onTouched()
  }


  getbuttonClasses(item: any): string {
    if (item.buttonType && item.size) {
      return [`btn-${item.buttonType}`, `btn-${item.size}`].join(' ');
    }
    return 'btn-primary'
  }
  get classes() {
    return `input-group-${this.inpuGroupSize}`;
  }

  getDefaultClass(type: string): string {
    if (type !== 'text') {
      return 'input-group-text';
    }
    return '';
  }
  onChange!: (value: string) => void;
  onTouched!: () => void;
  onKeyup(event: any) {
    this.onChange(event.target.value)
  }

  getClassElemet(type: string) {
    if (type === 'text') {
      return 'form-control'
    }
    return 'form-check-input mt-0'
  }

  focus() {
    this.onTouched()
  }
}

