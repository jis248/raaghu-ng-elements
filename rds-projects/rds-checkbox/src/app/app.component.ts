import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'rds-checkbox',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:AppComponent,
    multi:true
  }]


})
export class AppComponent implements OnInit ,ControlValueAccessor{
  value=''

  onChange!:(value:string) => void;
  onTouched!:() => void



  @Input()
  label?:string

  @Input()
  checked = false
  @Input()
  disabled=false

   @Input()
  switch= false

  @Input()
  inline= false

  @Input()
    id?:string

  @Input()
   state :'checkbox'|'Indeterminate'|'errorcheckbox'='checkbox';

   @Output()
   onClick = new EventEmitter<{evnt:any,item:string}>();

  constructor() { }
  writeValue(obj: any): void {
    this.value = obj
    //throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
    //throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
    //throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

  }

  public get classes():string[]{
    var classes = ['form-check']
    if(this.switch === true){
      classes.push('form-switch')
      return classes
    }
    if(this.inline === true){
      classes.push('form-check-inline')
      return classes
    }
    if(this.state==='Indeterminate'){
      classes.push('inder')
      return classes
    }
    if(this.state==='errorcheckbox'){
      classes.push('errorche')
      return classes
    }
    return classes
  }


  getValue(event:any){
    this.onClick.emit({evnt:event,item:event.target.value});

      this.onChange(event.target.value)
      this.onTouched()

  }

}

