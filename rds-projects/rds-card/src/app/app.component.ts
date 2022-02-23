import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rds-card',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  @Input() backgroundColor?: string;

  @Input() color?: string;

  @Input() cardTitle = 'Card Title';

  @Input() cardSubtitle = 'Card Subtitle';

  @Input() cardDescription = 'Some quick example text to build on the card title and make up the bulk of the card\'s content';

  @Input() headerTitle ="title";

  @Input() width? : string ="35%";

  @Input() height? : string = "230px";

  @Input()
  header!:TemplateRef<any>

  @Input()
  footer!:TemplateRef<any>

  public get cardClasses():string[]{
    let custClasses = ['card']

    return custClasses
  }

  public get cardBody():string[]{
    let custClasses = ['card-body','body-border']

    return custClasses
  }

  public get title():string[]{
    let custClasses = ['card-title']

    return custClasses
  }
}
