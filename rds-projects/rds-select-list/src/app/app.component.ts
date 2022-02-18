import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting: AppComponent,
    multi:true
  }]
})
export class AppComponent implements OnInit,ControlValueAccessor {

  selectedValue = ''
  onChange!:(value:string) => void;
  onTouched!:()=> void
  @Input()
  size:string=''

  @Input()
  selectSize:string='';

  @Input()
  DropdownItems!:TemplateRef<any>

  @Input()
  showSizeAttribute?:boolean

  @Input()
  disabled?:boolean=false;

  @Input()
  multiple?:boolean=false;

  @Input()
  customIcon='';
 // @Input()
 // floatinglabel=false

  @Input()
  floatinginputLabel?: string

  @Input()
  placeholderText?: string
  
  floatingcontent =false;

  @Input()
  listItems=[{value:'India',some:'value'},{value:'USA'},{value:'Canada'}];

  @Output() select = new EventEmitter();

  constructor() { }
  writeValue(obj: any): void {
    this.selectedValue = obj;

  }
  registerOnChange(fn: any): void {
    this.onChange = fn;

  }
  registerOnTouched(fn: any): void {
     this.onTouched = fn;
  }

  ngOnInit(): void {

  }

  public get ClassesForShowSelect():string{
     var show = this.showSizeAttribute ?  '': 'd-none'
     return show
  }

  public get classesForSelect():string[]{
    var selectTagClasses =['form-select']
    if(this.size === 'small'){
      var selectSize = 'form-select-sm'
      selectTagClasses.push(selectSize)
    }
    else if(this.size === 'large'){
      var selectSize = 'form-select-lg'
      selectTagClasses.push(selectSize)
    }
    else
    {
      var selectSize = 'default'
      selectTagClasses.push(selectSize)
    }

    return selectTagClasses
  }

  public get bootstrapIcon():string{
    var icon = this.customIcon
    return icon
  }

  public get icon():string[]{
    var classList =[''];
    
    if(this.floatinginputLabel){
      classList.push('form-floating')
      this.floatingcontent=true;
     }else{
      this.floatingcontent=false;
     }
    if(this.customIcon === ''){
      
      return classList
    }
    else{
      classList.push('icon')
      return classList
    }

  }
  public get iconPosition():string{
    if(this.customIcon === ''){
      return ''
    }
    else{
      return 'icon-position'
    }
  }

  onSelect(event:any){
    this.onChange(event.target.value)
    this.onTouched()
  }

}

