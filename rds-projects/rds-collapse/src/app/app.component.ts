import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'rds-collapse',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

  @Input()
  collapseId = 'collapseExample';

  @Input()
  label = 'collapse button';

  @Input()
  Horizontal = false;

  // @Input()
  // multipleTargets = false;

  @Input()
  width = '300px';

  @Input()
  content = 'This is some placeholder content for a horizontal collapse. Its hidden by default and shown when triggered.';

  @Input()
  backgroundColor?: string;

  @Input()
  borderColor?: string;

  @Input()
  Color?: string;

  @Input()
  // tslint:disable-next-line:variable-name
  button_backgroundColor ?: string;

@Input()
   // tslint:disable-next-line:variable-name
button_borderColor ?: string;

@Input()
  // tslint:disable-next-line:variable-name
button_Color ?: string;

expanded = false;

@Input()
buttonType: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark' = 'primary';


  // tslint:disable-next-line:no-output-on-prefix
@Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
@Output() onShow: EventEmitter<any> = new EventEmitter<any>();


constructor(){ }

ngOnInit(): void {
}

  public get collapsebutton(): string{
    return 'btn btn-' + this.buttonType;
  }

  public get collapsewrapper(): string {
    const mode1 = this.Horizontal ? ' collapse-horizontal' : '';
    return 'collapse' + mode1;
  }

  // tslint:disable-next-line:typedef
  public toggleExpanded() {
    this.expanded = !this.expanded;
    if (this.expanded)
    {
    this.onShow.emit(event);
    }
    else{
    this.onClose.emit(event);
    }
  }
}
