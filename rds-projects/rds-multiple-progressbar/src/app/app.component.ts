import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rds-multiple-progressbar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

  @Input()
  striped =false
  constructor() { }

  @Input()
  progressvalues = [{width:"50%",background:'bg-success',stripe:'progress-bar-striped', animation:'progress-bar-animated'},{width:"20%",background:'bg-danger'}]
  ngOnInit(): void {
  }
}
