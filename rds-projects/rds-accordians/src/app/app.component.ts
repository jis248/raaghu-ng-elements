import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  @Input()
  flush = false;

  @Input()
  expandall = false;
  title: any;

  public get classes(): string {
    const mode = this.flush ? 'accordion accordion-flush' : 'accordion';

    return mode;
   }
}

