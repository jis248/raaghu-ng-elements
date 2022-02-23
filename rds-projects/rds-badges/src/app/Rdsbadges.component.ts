import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rds-badges',
  templateUrl: './Rdsbadges.component.html',
  styleUrls: ['./Rdsbadges.component.scss']
})
export class RdsBadgesComponent {
  title = 'rds-badges';

  public get classes(): string {
    const mode = `${this.pillBadges ? 'badge rounded-pill bg-' + this.types : 'badge bg-' + this.types}`;
    return mode;
 }


 @Input()
 color?: string;
 @Input()
 size ='mid'

 @Input()
 types: 'primary' | 'secondary' | 'success'| 'danger' | 'warning' | 'info' | 'light' |'dark' = 'primary';


 @Input()
 label = 'New';

 @Input()
 pillBadges = false;

 @Input()
 positioned = false
 
 @Input()
 iconBadge = false;

 @Output()
 onClick = new EventEmitter<Event>();
 
 ngOnInit(): void {
 }

 public get classList():string[]{
   var clsList:string[] =[`${this.size}`]
   if(this.positioned=== true){
     clsList.push('position-absolute')
     clsList.push('top-0')
     clsList.push('start-100')
     clsList.push('translate-middle')
     clsList.push('badge')
   }
   if(this.iconBadge === true){
     clsList.push('rounded-circle')
   }
   return clsList
 }

}
