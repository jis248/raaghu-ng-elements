import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rds-offcanvas',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  scroll = false;
  backdrop = false;

  @Input()
  buttonTitle ='Button'

  @Input() placement ?: 'start' | 'end ' | 'top ' | 'bottom ' = 'start';

  @Input() backDrop ?: 'Scrolling' | 'WithBackdrop' | 'WithBothOptions'= 'WithBothOptions';

  @Input()
  offId = 'canvasExample';

  @Input() canvasTitle ="Title";

  @Output()
  onShow = new EventEmitter<Event>();

  @Output()
  onClose = new EventEmitter<Event>();

  public get classes(): string {
    if(this.backDrop === 'Scrolling'){
      this.scroll = true;
      this.backdrop = false;
    }
    else if(this.backDrop === 'WithBackdrop' ){
        this.scroll = false;
        this.backdrop = true;
    }
    else{
      this.scroll = true;
      this.backdrop = true;
    }

    const align =  ` offcanvas offcanvas-${this.placement}`;

    return align;
  }
}
