import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rds-dropdownlist',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'rds-dropdownlist';

  @Input()
  placeholder = "Filter by user"

  @Input()
  split = false

  @Input()
  variations = ''

  @Input()
  DropdownItems!: TemplateRef<any>

  @Input()
  listItems = [{ value: 'India', some: 'value 1', status: 'Billable' }, { value: 'USA', some: 'value 2', status: 'Non-Blillable' }, { value: 'Canada', some: 'value 3' }];

  constructor() { }

  ngOnInit(): void {

  }

  public get variation(): string[] {
    let values = [`${this.variations}`]
    return values
  }

  public get type(): string {
    return this.split ? 'split-button' : ''
  }
}
