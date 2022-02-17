import { ViewEncapsulation } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit  {
  title = 'rds-dropdown';
  @Input()
  dropdownStyle?:string;


  @Input()
  size?:string;
  @Input()
  DropdownItems!:TemplateRef<any>
  @Input()
  darkDropdown = false
  @Input()
  listItems=[{value:'India',some:'value'},{value:'USA'},{value:'Canada'}];
  constructor() { }
  @Input()
  label?:string;

  @Input()
  direction?:string;

  @Input()
  color?:string;

  @Input()
  textColor?:string;

  ngOnInit(): void {
  }

  public get button1():any[]{

     var customClasses =['btn', `${this.dropdownStyle}`]

     if(this.size === 'small'){
      var selectSize = 'btn-sm'
      customClasses.push(selectSize)
    }
    else if(this.size === 'large'){
      var selectSize = 'btn-lg'
      customClasses.push(selectSize)
    }
    else
    {
      var selectSize = ''
      customClasses.push(selectSize)
    }

    if(this.color !== ''){

        var index = customClasses.indexOf(`${this.dropdownStyle}`)
        customClasses.splice(index,1)
     }
return customClasses
   }

  public get splitdown():any[]{

    var customClasses =['btn', `${this.dropdownStyle}` ,'dropdown-toggle', 'dropdown-toggle-split']

    if(this.size === 'small'){
     var selectSize = 'btn-sm'
     customClasses.push(selectSize)
   }
   else if(this.size === 'large'){
     var selectSize = 'btn-lg'
     customClasses.push(selectSize)
   }
   else
   {
     var selectSize = ''
     customClasses.push(selectSize)
   }

   if(this.color !== ''){

       var index = customClasses.indexOf(`${this.dropdownStyle}`)
       customClasses.splice(index,1)
    }
 return customClasses
  }

   // Dropdown background theme
   public get menu():string[]{
     var customMenu = ['dropdown-menu']
    var color = this.darkDropdown? 'dropdown-menu-dark':''
    customMenu.push(color)
     return customMenu
   }

   //Drop down direction
   public get dropdownDirection():string[]{
     var directionClasses =['btn-group']
     if(this.direction ==='Drop-down'){
       var direction = 'dropdown'
       directionClasses.push(direction)
     }
     else if(this.direction === 'Drop-up'){
      var direction = 'dropup'
      directionClasses.push(direction)
     }
     else if(this.direction === 'Drop-end'){
      var direction = 'dropend'
      directionClasses.push(direction)
     }
     else if(this.direction === 'Drop-start'){
      var direction = 'dropstart'
      directionClasses.push(direction)
     }
     else{
       return directionClasses
     }
     return directionClasses
   }

}
