import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreadcrumbsItems } from './service/breadcrumb-item';
import { BreadcrumbsService } from './service/breadcrumbsItems.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rds-breadcrumb';

  constructor(private breadcrumbsService: BreadcrumbsService) {}

   ngOnInit(): void {

   this.subscription = this.breadcrumbsService.getItem().subscribe(items => {

    if(items) {
      this.breadcrumbsitems = this.customBreadcrumbsItems
    } else {
      this.breadcrumbsitems = [];
    }
  });
  this.breadcrumbsService.sendItems(this.customBreadcrumbsItems);
  }

  subscription!: Subscription;
  breadcrumbsitems: BreadcrumbsItems[] = [];


  @Input()
  customBreadcrumbsItems: BreadcrumbsItems[] = [{name:'Home',route:'/home',iconClass: 'bi bi-house-door'},{name:'About',route:'/About',iconClass: 'bi bi-house-door'},{name:'Contact US',route:'/Contact',iconClass: 'bi bi-house-door'},{name:'Services',route:'/Services',iconClass: 'bi bi-house-door'},{name:'Contact US',route:'/Contact',iconClass: 'bi bi-house-door'}];
  
  @Input() color ?: string;
  @Input() role : 'basic' | 'Advanced' | 'withDivider'=  'basic';
  @Input() iconShow : boolean = false;
  @Input()
  colorType?: string;

  @Input()
  submit = false;

  @Input()
  backgroundColor?: string;

  @Input()
  borderColor?: string;

 
  @Input()
  block = false;

  @Input()
  size?: string;

  @Input()
  disabled = false;

  @Input()
  outlineButton = false;

  @Input()
  roundedButton = false;

  @Input()
  toggleButton = false;

  @Input()
  iconClass?: string;

  @Input()
  label?: string;

 @Output() onNavigation = new EventEmitter<Event>();

 activepage?: number;
 onClick(item:any,i:number): void {

 this.activepage=i;
 this.onItemClick.emit(item);

}

  @Output()
  onItemClick = new EventEmitter<any>();

}
