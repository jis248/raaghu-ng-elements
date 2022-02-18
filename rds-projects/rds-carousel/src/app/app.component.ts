import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  static count = 0;
    id = '';

    @Input()
    crossFade = false;

    @Input()
    darkVariant = false;

    @Input()
    indicators = false;

    @Input()
    controls =  false;
    @Input()
    imageItem = [
      {
        img: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
        caption: 'this is the caption section were u can add the caption for the image'
      },
      {
        img : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        caption: 'this is the caption section were u can add the caption for the image'
      }
    ];
    constructor(){
      this.id = 'carousel' + AppComponent.count++;
    }

  ngOnInit(): void {
  }

  public get classes(): string{
    const mode1 = this.crossFade ? ' carousel-fade' : '';
    const mode2 = this.darkVariant ? ' carousel-dark' : '';
    return 'carousel slide' + mode1 + mode2;
  }
}
