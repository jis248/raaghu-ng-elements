import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-progressbar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rds-progressbar';

    @Input()
    animation?:boolean;
    @Input()
    height?:string;
    @Input()
    colorType?:string;
    @Input()
    striped?:string;
    @Input()
    customColor?:string;

    @Input()
    progressWidth?:string;

    @Input()
    progressbar_MaxWidth?:string;

    @Input()
    label?:boolean;

    @Input() role?: 'single' | 'multiple' = 'single';

    @Input()
    progressvalues = [{progressWidth:"50%",background:'bg-success',stripe:'progress-bar-striped', animation:'progress-bar-animated'},{progressWidth:"20%",background:'bg-danger'},{progressWidth:"30%",background:'bg-info'}];

    constructor() { }

    ngOnInit(): void {

    }

    // lable value
    public get lableValue():any{
      var label = this.label? this.progressWidth :''
      return label
    }

    //classes for progress bar
    public get classes():any[]{

     // var customClasses =  ['progress-bar', `${this.progressIndicatorColor}` , `${this.striped}`,`${this.customIndicatorColor}`];
      var customClasses =['progress-bar', `${this.striped}`,`${this.colorType}`]

      var animate = this.animation ? 'progress-bar-striped progress-bar-animated' : ''
      customClasses.push(animate)

      if(this.customColor !== ''){

         var index = customClasses.indexOf(`${this.colorType}`)
         customClasses.splice(index,1)
      }
      return customClasses
    }
  }

