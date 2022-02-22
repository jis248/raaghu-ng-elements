import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-progressbar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //title = 'rds-progressbar';

    @Input()
    animation?:boolean;
    @Input()
    height?:string;
    @Input()
    progressIndicatorColor?:string;
    @Input()
    striped?:string;
    @Input()
    customIndicatorColor?:string;
  
    @Input()
    width?:string;
  
    @Input()
    label?:boolean;
  
    constructor() { }
  
    ngOnInit(): void {
  
    }
  
    // lable value
    public get lableValue():any{
      var label = this.label? this.width :''
      return label
    }
  
    //classes for progress bar
    public get classes():any[]{
  
     // var customClasses =  ['progress-bar', `${this.progressIndicatorColor}` , `${this.striped}`,`${this.customIndicatorColor}`];
      var customClasses =['progress-bar', `${this.striped}`,`${this.progressIndicatorColor}`]
  
      var animate = this.animation ? 'progress-bar-striped progress-bar-animated' : ''
      customClasses.push(animate)
  
      if(this.customIndicatorColor !== ''){
  
         var index = customClasses.indexOf(`${this.progressIndicatorColor}`)
         customClasses.splice(index,1)
      }
      return customClasses
    } 
  }
  
