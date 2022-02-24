import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rds-badges',
  templateUrl: './RdsBadges.component.html',
  styleUrls: ['./RdsBadges.component.scss']
})
export class RdsBadgesComponent {
  title = 'rds-badges';
  @Input()
  color?: string;
  @Input()
  size = 'mid'
  @Input()
  types: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';
  @Input()
  label = '';
  @Input()
  pillBadges = false;
  @Input()
  positioned = false
  @Input()
  iconBadge = false;
  @Output()
  onClick = new EventEmitter<Event>();
  ngOnInit(): void {
  }
  public get classList(): string[] {
    var clsList: string[] = [`${this.size}`]
    if (this.positioned === true) {
      clsList.push('position-absolute')
      clsList.push('top-0')
      clsList.push('start-100')
      clsList.push('translate-middle')
      clsList.push('badge')
      clsList.push('rounded-pill')
      var bagground = 'bg-' + this.types
      clsList.push(bagground)
    }
    else if (this.iconBadge === true) {
      clsList.push('position-absolute')
      clsList.push('top-0')
      clsList.push('start-100')
      clsList.push('translate-middle')
      clsList.push('badge')
      clsList.push('rounded-pill')
      var bagground = 'bg-' + this.types
      clsList.push(bagground)
    }
    else if (this.iconBadge) {

    }
    else {
      if (this.pillBadges) {
        clsList.push('badge')
        clsList.push('rounded-pill')
        var bagground = 'bg-' + this.types
        clsList.push(bagground)
      } else {
        clsList.push('badge')
        var bagground = 'bg-' + this.types
        clsList.push(bagground)
      }
    }

    return clsList
  }

}
