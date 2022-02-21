import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rds-list-group',
  templateUrl: './RdsListGroup.component.html',
  styleUrls: ['./RdsListGroup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RdsListGroupComponent {
  title = 'rds-list-group';
   @Input() flush = false;
  @Input() listType: 'list' | 'button' = 'list';
  @Input() orderList = false;
  @Input() backgroundType: 'primary'| 'secondary'| 'success' | 'danger'| 'warning' | 'info'| 'light' | 'dark' = 'primary';
  //@Input() type: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'xxl';

  @Output() onClick = new EventEmitter<Event>();

  @Input()
  list!: TemplateRef<any>;
  @Input() listItem:any[] =[];
selectedItem=1;
public get classes(): string[] {

    var listClasses= ['list-group']
    if(this.flush === true){
      listClasses.push('list-group-flush')
    }
    if(this.orderList === true){
      listClasses.push('list-group-numbered')
    }
    if(this.listItem.length)
    {
    this.listItem.forEach( (element) => {
      var backgroundclass='list-group-item-'+this.backgroundType;
      element.type = [`list-group-item`, backgroundclass].join(' ');
    });
  }
  return listClasses
 }
listClick(event:any) {
    
    console.log(event)
    this.selectedItem = event
   
}
public get listItemClass() {

  var list= ['list-group-item']
  list.push("list-group-item-"+this.backgroundType)

return list
}
}
