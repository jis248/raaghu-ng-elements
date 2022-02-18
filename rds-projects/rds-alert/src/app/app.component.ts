import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {
  title = 'rds-alert';

  // visibility true or false
  @Input() visibility = false;

  @Input()
  alertOpen = true

  // @Input()
  // showicon =false
  // @Input()
  // showheading =true
  @Input()
  dismisable = true
  // background-color property
  @Input() backgroundColor?: string;

  @Input() color?: string;

  // added icon in Alert Box

  @Input() icon = 'bi bi-info-circle';

  @Input() label = 'A simple primary alert—check it out!';
  @Input() heading = 'Heading';
  @Input() type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDismiss = new EventEmitter<Event>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onShow = new EventEmitter<Event>(this.visibility = true);

  public get classes(): string {
    const mode = `alert alert-${this.type} alert-dismissible fade show`;

    return mode;
  }
  // public get showIcon():string{
  //   let icon = ''
  //   if(this.showicon=== true){
  //     icon = 'd-none'
  //   }
  //   return icon

  // }

  public get withDismiss(): string {
    let dismiss = 'd-none'
    if (this.dismisable === true) {
      dismiss = ''
    }
    return dismiss

  }

  showAlert() {
    this.alertOpen = true
  }

  closeAlert() {
    this.alertOpen = false;
    this.onDismiss.emit();
    console.log(this.alertOpen)
  }

  // tslint:disable-next-line:typedef
  close() {
    this.visibility = true;
  }
}
