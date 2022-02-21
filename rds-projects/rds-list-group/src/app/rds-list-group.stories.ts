import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsListGroupComponent } from './RdsListGroup.component';
export default {

  title: 'rds-list-group',
  component: RdsListGroupComponent,
  argTypes: {
   
       },
      } as Meta;

const Template: Story<RdsListGroupComponent> = (args: RdsListGroupComponent) => ({

  props: args,
 });


 export const listgroup: Story<RdsListGroupComponent> = (args) => ({
  props: args,
  template:
  `<rds-list-group
  [flush]="false"
  listType="list"
  [orderList]="false"
  [listItem]="listItem"
  (onClick)="onClick($event)"
  [list]="list"
>
<ng-template #list  let-item>  
<li [ngClass]="item.type" >
{{item.label}}</li>
</ng-template>
</rds-list-group>`
    
});
listgroup.args = {
  flush : false,
  listItem:[  {
    label:' label 1',
    disabled:true,
    badgeLabel: '10',
    listHeading:'',
    listContent:'',
    listTime:'',
    type:''
  },
  {
    label:' label 2',
    disabled:false,
    badgeLabel: '2',
    listHeading:'',
    listContent:'',
    listTime:'',
    type:''
  },
  {
    label:' label 3',
    disabled:false,
    badgeLabel: '5',
    listHeading:'',
    listContent:'',
    listTime:'',
    type:''
  }]
};
export const FormElements: Story<RdsListGroupComponent> = (args) => ({
  props: args,
  template:
  `<rds-list-group
  [flush]="false"
  listType="list"

  [orderList]="false"
  [listItem]="listItem"
  (onClick)="onClick($event)"
  [list]="list"
>
    
<ng-template #list  let-item>      
<li [ngClass]="item.type">
<input class="form-check-input me-1" type="checkbox" value="">
{{item.label}}
</li>
</ng-template>
</rds-list-group>`
});
FormElements.args = {
  flush : false,
  listItem:[  {
    label:' label 1',
    disabled:true,
    badgeLabel: '10',
    listHeading:'',
    listContent:'',
    listTime:'',
    type:''
  },
  {
    label:' label 2',
    disabled:false,
    badgeLabel: '2',
    listHeading:'',
    listContent:'',
    listTime:'',
    type:''
  },
  {
    label:' label 3',
    disabled:false,
    badgeLabel: '5',
    listHeading:'',
    listContent:'',
    listTime:'',
    type:''
  }]
};








