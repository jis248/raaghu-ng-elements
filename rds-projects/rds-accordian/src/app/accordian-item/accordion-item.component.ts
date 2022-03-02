import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionItemComponent implements OnInit {

  static accordionItemCount = 0;
  // tslint:disable-next-line:no-inferrable-types
 // @Input() content: string = 'This is Content';
  @Input() id = AccordionItemComponent.accordionItemCount;
  @Input() count = AccordionItemComponent.accordionItemCount;
  @Input()
  title!: string;
  // tslint:disable-next-line:ban-types
  @Input() context: Object | null = null;
  @Input() expanded = false;
  // @HostBinding("attr.aria-level") @Input() ariaLevel = 3;
  // @HostBinding("style.display") itemType = "block";
  // @HostBinding("class.accordion-item") itemClass = true;
  // @Output() selected: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onShow: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  content!:TemplateRef<any>

  @Input()
  accordion!:TemplateRef<any>

  constructor() {
    AccordionItemComponent.accordionItemCount++;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  // tslint:disable-next-line:typedef
  public toggleExpanded() {
    this.expanded = !this.expanded;
    if (this.expanded)
    {
    this.onShow.emit({id: this.id});
    }
    else{
    this.onClose.emit({id: this.id});

    }
  }
  // tslint:disable-next-line:typedef
  public isTemplate(value: any) {
    return value instanceof TemplateRef;
  }

  public get expand():string[]{
    let val = ['']
    if(this.expanded === true){
      val.push('accordion-collapse')
      val.push('show')
    }
    return val
  }
}
