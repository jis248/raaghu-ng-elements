import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rds-table',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'rds-table';

  @Input()
  hover = false

  @Input()
  tableItems: any = [{ name: "xyz", age: 25, state: "Maharashtra" }, { name: "yz", age: 21, state: "Hariyana" }]

  @Input()
  thead!: TemplateRef<any>;

  @Input()
  tbody!: TemplateRef<any>
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {

  }

  public get class(): string {
    var hover = ''
    if (this.hover === true) {

      hover = 'table-hover'
    }
    return hover
  }
}
