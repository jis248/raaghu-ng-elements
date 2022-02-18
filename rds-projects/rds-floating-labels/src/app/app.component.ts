import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rds-floating-labels';
  @Input() label: string = 'Floating Label';
  @Input() id: string = 'floatingInput';
  @Input() name: string = 'floatingInputName';
  @Input() value: string;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() multiple: boolean = false;
  @Input() placeholder: string = '';
  @Input() type: 'email' | 'text' | 'number' | 'password' | 'textarea' | 'selection' = 'text';
  @Input() listItems = ['one', 'two', 'three'];
  onSelect(event:any){
  
  }
}
