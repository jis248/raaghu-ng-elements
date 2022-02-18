import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 // title = 'rds-tooltip';
 constructor(
  // tslint:disable-next-line:variable-name
  private _renderer2: Renderer2,
  // tslint:disable-next-line:variable-name
  @Inject(DOCUMENT) private _document: Document

) { }

@Input()
tooltipTitle =  '';
@Input()
tooltipPosition: 'top' | 'bottom' | 'right' | 'left' = 'bottom';
ngOnInit(): void {
}

ngAfterViewInit(): void {
  // tslint:disable-next-line:prefer-const
  let script = this._renderer2.createElement('script');
  script.text = `
              var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
              var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
              })
              `;
  this._renderer2.appendChild(this._document.body, script);
}
}
