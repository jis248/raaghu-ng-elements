import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

  @Input()
  Placeholder ='New'

  @Input()
  icon =''

  @Input()
  size ='form-control-sm'
  constructor() { }

  ngOnInit(): void {
  }

}