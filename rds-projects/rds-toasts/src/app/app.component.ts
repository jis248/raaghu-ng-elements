import { AfterViewInit, Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'rds-toasts';

    // messages: any[] = [];
  subscription!: Subscription;
  
   @Input()
   message='Hello, world! This is a toast message.';
  
   @Input()
   withImage = false
  
   @Input()
   withHeader =false
  
   @Input()
   background = ''
  
   @Input()
   customColor = false
  
   @Input()
   custcolor = '#000000'
  
   @Input()
   headerTitle = '#000000'
  
   @Input()
   time = '11 seconds  ago'
  
   @Input()
   textColor = ''
  
  
   //messages: ToastItems[] = [];
    constructor(
        //private messageService: MessageService
    ) { }
    ngOnInit(): void {     
   
    }
    ngAfterViewInit(): void {
            
    }
    
    public get show():any[]{  
      var customClasses =['']
      if(this.withHeader === true){
        customClasses.push('d-none')
      }  
      return customClasses
    }

    public get classes():any[]{  
      var customClasses =[`${this.background}`]
      if(this.customColor === true){
        customClasses.pop()
      }  
      return customClasses
    }

    public get img():any[]{  
      var customClasses =['']
      if(this.withImage === true){
        customClasses.push('d-none')
      }  
      return customClasses
    }
}
