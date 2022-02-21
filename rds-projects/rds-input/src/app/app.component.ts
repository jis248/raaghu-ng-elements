import { Component, Input } from '@angular/core';

@Component({
  selector: 'rds-input',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rds-input';
  onChange!: (value: string) => void;
  onTouched!: () => void;

  @Input()
  size?:string;

  @Input()
  disabled=false

 // @Input()
  //floatinglabel=false

  @Input()
  readonly?:boolean;

  @Input()
  value='';

  @Input()
  inputType='';

  @Input()
  placeholder='Enter a value';

  @Input()
  ErrorMessage ='Add custom error message'

  @Input()
  validate = false

  @Input()
  floatinginputLabel?: string

  floatingcontent =false;

  constructor() {

  }
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
      this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn

  }

  ngOnInit(): void {

  }


  onKeyup(event: any){
    this.onChange(event.target.value)
 }

 focus(){
  this.onTouched()
 }

  public get classes():string[]{
    var classList =['form-control','cmninput',]
    if(this.validate === true){
      classList.push('is-invalid')
    }
    if(this.size === 'small'){
      var selectSize = 'form-control-sm'
      classList.push(selectSize)
    }
    else if(this.size === 'large'){
      var selectSize = 'form-control-lg'
      classList.push(selectSize)
    }
    else
    {
      var selectSize = ''
     classList.push(selectSize)
    }

    return classList
  }

  public get divclasses():string[]{
    var classList =['mb-3']
   if(this.floatinginputLabel){
    classList.push('form-floating')
    this.floatingcontent=true;
   }else{
    this.floatingcontent=false;
   }
    if(this.size === 'small'){

      classList.push('w-25')
    }
    else if(this.size === 'large'){

      classList.push('w-50')
    }
     return classList
  }
  public get formState():string{
    var state = 'd-none'
    if(this.disabled=== true){
      var state = ''
      return state
    }
    return state
  }
}
