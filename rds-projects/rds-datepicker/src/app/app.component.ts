import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'rds-datepicker',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  //title = 'rds-datepicker';
  selectedDate = new Date();
  bsInlineValue = new Date();
  bsInlineRangeValue?: Date[];
  currentDate = new Date();
  yesterdayDate = new Date();
  lastSevendate = new Date();
  lastFourteendate = new Date();
  firstRange: any;
  lastRange: any;
  maxDate = new Date();
  title = 'Today';
  dateRange?: Date[];
  public dates = new Date();
  newDate?: 'currentDate' | 'yesterdayDate' | 'lastSevendate' | 'lastFourteendate' | 'custom' = 'currentDate';
  @Input() Label = "Date range";
  @Output() change = new EventEmitter<Date>();
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue];
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  todayDate(event: Event): void {
    this.currentDate = this.dates;
    this.newDate = 'currentDate';
    this.title = 'Today';
  }
  yesDate(event: Event): void {
    this.yesterdayDate.setDate(this.dates.getDate() - 1);
    this.newDate = 'yesterdayDate';
    this.title = 'Yesterday';
  }
  lastSevenDate(event: Event): void {
    this.lastSevendate.setDate(this.dates.getDate() - 7);
    this.newDate = 'lastSevendate';
    this.title = ' Last 7 days';
  }
  lastFourteenDate(event: Event): void {
    this.lastFourteendate.setDate(this.dates.getDate() - 14);
    this.title = 'Last 14 days';
    this.newDate = 'lastFourteendate';
  }

  changeDate(value: any) {
    let rangeDate = value;
    this.firstRange = rangeDate[0];
    this.lastRange = rangeDate[1];
    this.newDate = 'custom';
    this.title = 'Custom Date';
  }
}
