
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsTooltipComponent } from './rds-tooltip.component';

export default {
    title: 'Elements/Tooltip',
    component: RdsTooltipComponent,
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [CommonModule],
      }),
    ],
} as Meta;

const Template: Story<RdsTooltipComponent> = (args: RdsTooltipComponent) => ({
    props: args,
});

export const TooltipWithLink: Story<RdsTooltipComponent> = (args) => ({
  props: args,
  template:
      `
      <rds-tooltip [tooltipTitle] = "tooltipTitle" [tooltipPosition] = "tooltipPosition">
      <a href = "#" data-bs-toggle="tooltip" [attr.data-bs-placement]="tooltipPosition" [title]="tooltipTitle">hello links with tooltips</a>
      </rds-tooltip>
      `,
});
TooltipWithLink.args = {
  tooltipPosition: 'bottom',
  tooltipTitle: 'this tooltip title'
};

export const TooltipWithPTag: Story<RdsTooltipComponent> = (args) => ({
  props: args,
  template:
      `<rds-tooltip [tooltipTitle] = "tooltipTitle" [tooltipPosition] = "tooltipPosition">
      <a class="d-inline-block" href = "#" data-bs-toggle="tooltip" [attr.data-bs-placement]="tooltipPosition" [title]="tooltipTitle">hello this paragarph</a>
      </rds-tooltip>
      `,
});
TooltipWithPTag.args = {
  tooltipPosition: 'bottom',
  tooltipTitle: 'p tooltip'
};
export const TooltipWithSvg: Story<RdsTooltipComponent> = (args) => ({
  props: args,
  template:
      `<rds-tooltip [tooltipTitle] = "tooltipTitle" [tooltipPosition] = "tooltipPosition">
      <a class="d-inline-block" href = "#" data-bs-toggle="tooltip" [attr.data-bs-placement]="tooltipPosition" [title]="tooltipTitle">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-boxes" viewBox="0 0 16 16">
      <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/>
      </svg>
      </a>
      </rds-tooltip>
      `,
});
TooltipWithSvg.args = {
  tooltipPosition: 'right',
  tooltipTitle: 'image tooltip'
};
