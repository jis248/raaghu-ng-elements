import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rds-list-group';
   @Input() flush = false;
  @Input() listType: 'list' | 'button' = 'list';
  @Input() orderList = false;
  @Input() backgroundType: 'primary'| 'secondary'| 'success' | 'danger'| 'warning' | 'info'| 'light' | 'dark' = 'primary';
  @Input() type: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'xxl';

  @Output() onClick = new EventEmitter<Event>();

  @Input()
  list!: TemplateRef<any>;
  @Input() listItem =[
        {
          label:' label 1',
          disabled:true,
          badgeLabel: '10',
          listHeading:'',
          listContent:'',
          listTime:'',
        },
        {
          label:' label 2',
          disabled:false,
          badgeLabel: '2',
          listHeading:'',
          listContent:'',
          listTime:'',
        },
        {
          label:' label 3',
          disabled:false,
          badgeLabel: '5',
          listHeading:'',
          listContent:'',
          listTime:'',
        }
  ];

  selectedItem=1;



  public get classes(): string[] {

    var listClasses= ['list-group']
    if(this.flush === true){
      listClasses.push('list-group-flush')
    }
    if(this.orderList === true){
      listClasses.push('list-group-numbered')
    }


    return listClasses
 
  }


  listClick(event:any) {
    
    console.log(event)
    this.selectedItem = event
   
}
public get listItemClass(): string[] {

  var list= ['list-group-item']


  return list
}
}
