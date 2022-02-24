import { AfterViewInit, Component, Input, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';


export interface chartlabel {
  labelname: Array<string>;

}
export interface chartDataset {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  title = 'rds-radar-chart';

  static count = 0;
  canvas: any;
  ctx: any;
  value: any;

  chartdata: any;
  chartId = 'mychart' + AppComponent.count;
  @Input() chartWidth = 400;
  @Input() ChartStyle?: any;
  @Input() chartLabels?: any
  @Input() canvasBackgroundColor?: any;
  @Input() chartDatasets?: chartDataset[] | any;
  @Input() chartOptions?: any;
  static inload: boolean;

  constructor() {
    AppComponent.count++;
  }

  public get classes(): string[] {
    var classes = ['res-width']
    if (this.ChartStyle === "Dark") {
      classes.push('dark-mode')
      return classes
    }

    return classes
  }

  ngOnChanges(changes: SimpleChanges) {
    var canvass = document.getElementById(this.chartId) as HTMLCanvasElement;
    if (changes['canvasBackgroundColor']) {
      this.canvasBackgroundColor = changes['canvasBackgroundColor'].currentValue
    }
  }

  ngAfterViewChecked() {
    this.canvas = document.getElementById(this.chartId);
    this.canvas.style.backgroundColor = this.canvasBackgroundColor;
  }

  ngAfterViewInit() {
    this.canvas = document.getElementById(this.chartId);
    this.ctx = this.canvas.getContext('2d');

    const myChart = new Chart(this.ctx, {
      type: 'radar',
      data: {
        labels: this.chartLabels,
        datasets: this.chartDatasets,
      },

      options: this.chartOptions,
    });
  }
}


