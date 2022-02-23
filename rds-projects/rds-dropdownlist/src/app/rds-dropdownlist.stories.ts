import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

export default {

  title: 'Elements/Dropdown List',
  component: AppComponent,
  argTypes: {

  },
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({

  props: args,
});


export const dropdownList: Story<AppComponent> = (args) => ({
  props: args,
  template:
    `<rds-dropdownlist [DropdownItems]="DropdownItems" [listItems]="listItems">

    <ng-template #DropdownItems let-val let-index = "index"> 
    <li [class.active]="index === 1">
  
    <div class="d-flex align-items-center bind-center-div1 group-list">
        <input type="checkbox"/>
        <img class="drop-round-img bind-avtar" src="https://placekitten.com/50/50">
        <span class="mr-auto">{{val.some}}<br></span>
    </div>
    </li>
    
    </ng-template>
    
    </rds-dropdownlist>`

});
dropdownList.args = {
  placeholder: 'Filter',
  split: false,
  variations: '',
  listItems: [{ value: 'India', some: 'value 1', status: 'Billable' }, { value: 'USA', some: 'value 2', status: 'Non-Blillable' }, { value: 'Canada', some: 'value 3' }],

};
export const Bill: Story<AppComponent> = (args) => ({
  props: args,
  template:
    `<rds-dropdownlist [DropdownItems]="DropdownItems" [listItems]="listItems" >

    <ng-template #DropdownItems let-val let-index="index"> 
    
    <li [class.active]="index === 1">
    <div class="d-flex align-items-center group-list">
    <span class="mr-auto">{{val.status}}</span>
    </div>
    </li>

    </ng-template>
    
    </rds-dropdownlist>`
});
Bill.args = {
  placeholder: 'Filter',
  split: false,
  variations: '',
  listItems: [{ value: 'India', some: 'value 1', status: 'Billable' }, { value: 'USA', some: 'value 2', status: 'Non-Blillable' }, { value: 'Canada', some: 'value 3' }],
};

export const countryDropdown: Story<AppComponent> = (args) => ({
  props: args,
  template:
    `<rds-dropdownlist [DropdownItems]="DropdownItems" [listItems]="listItems">

    <ng-template #DropdownItems let-val let-index = "index"> 
    
    <li [class.active]="index === 1">
    <div class="d-flex align-items-center group-list">
        <img class="flag-img" src="https://img.icons8.com/emoji/22/000000/india-emoji.png"/>
        <span class="mr-auto">{{val.value}}</span>
    </div>
    </li>
    </ng-template>
    
    </rds-dropdownlist>`
});
countryDropdown.args = {
  placeholder: 'Filter',
  split: false,
  variations: '',
  listItems: [{ value: 'India', some: 'value 1', status: 'Billable' }, { value: 'USA', some: 'value 2', status: 'Non-Blillable' }, { value: 'Canada', some: 'value 3' }],
};

export const defaultDropdown: Story<AppComponent> = (args) => ({
  props: args,
  template:
    `<rds-dropdownlist [DropdownItems]="DropdownItems" [listItems]="listItems" >

    <ng-template #DropdownItems let-val let-index = "index"> 
    <li [class.active]="index === 1">
    
    <div class="d-flex align-items-center group-list">
    <span class="mr-auto">{{val.some}}</span>
    </div>
    
     </li>
    </ng-template>
    
    </rds-dropdownlist>`
});
defaultDropdown.args = {
  placeholder: 'Filter',
  split: false,
  variations: '',
  listItems: [{ value: 'India', some: 'value 1', status: 'Billable' }, { value: 'USA', some: 'value 2', status: 'Non-Blillable' }, { value: 'Canada', some: 'value 3' }],
};







