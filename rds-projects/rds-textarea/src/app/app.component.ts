import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit ,ControlValueAccessor {
  title = 'rds-textarea';
  value='Text area value';
  onChange!:(value:string) => void
  onTouched!:() => void

  @Input()
  disabled?:boolean

  @Input()
  rows?:string;

  @Input()
  readonly?:boolean;

  @Input()
  label='text area'

 // @Input()
  //floatinglabel=false

  @Input()
  floatinginputLabel?: string

  @Input()
  placeholderText = 'TextArea'
  
  floatingcontent =false;

  constructor() { }
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
  }

  setValue(event:any){
    this.value = event.target.value
    this.onChange(this.value)
    this.onTouched()
  }

  public get divclasses():string[]{
    var classList =['mb-3']
   if(this.floatinginputLabel){
    classList.push('form-floating')
    this.floatingcontent=true;
   }else{
    this.floatingcontent=false;
   }
    
     return classList
  }
}
