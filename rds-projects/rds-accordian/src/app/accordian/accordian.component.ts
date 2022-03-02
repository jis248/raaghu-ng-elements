import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rds-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccordianComponent {

  @Input()
  flush = false;

  @Input()
  expandall = false;
  title: any;

  public get classes(): string {
    const mode = this.flush ? 'accordian accordian-flush' : 'accordian';

    return mode;
   }
}

