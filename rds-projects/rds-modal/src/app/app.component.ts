import { Component, Input, OnInit,Output,EventEmitter, ViewChild, ElementRef, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rds-modal',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {

  }
  ngOnInit(): void {
  }

  @Input()
  label?: string;
  @Input() title?: string;
  @Input() content?: string;
  @Input()
  backgroundColor?: string;
  @Input()
  height?: number;
  @Input()
  modalId?: string;
  @Input()
  backdropstatic?: any
  @Output()
  onShow = new EventEmitter<Event>();
  @Output()
  onClose = new EventEmitter<Event>();
  @Output() onClick = new EventEmitter();
  @Input()
  ModalClasses: 'modal-dialog' | 'modal-dialog modal-dialog-centered' | 'modal-dialog modal-dialog-scrollabl' | 'modal-dialog modal-xl' | 'modal-dialog modal-lg' | 'modal-dialog modal-sm' = 'modal-dialog';

  @Input()
  modalheader!: TemplateRef<any>;
  @Input()
  Modalbody!: TemplateRef<any>
  @Input()
  Modalfooter!: TemplateRef<any>


  public get classes(): string[] {


    var classes = ['modal-dialog']
    if (this.ModalClasses === 'modal-dialog modal-dialog-centered') {
      classes.push('modal-dialog-centered')
      return classes
    }
    if (this.ModalClasses === 'modal-dialog modal-dialog-scrollabl') {
      classes.push('modal-dialog-scrollabl')
      return classes
    }



    return classes

  }

}
