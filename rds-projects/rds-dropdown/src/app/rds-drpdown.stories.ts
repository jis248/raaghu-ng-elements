import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';



export default {
    title: 'Elements/Dropdown',
    component:AppComponent ,
    argTypes: {
        dropdownStyle: {
            options: ['btn-primary', 'btn-secondary','btn-success','btn-danger','btn-secondary','btn-info'],
            control: { type: 'select' }
          },
          size: {
            options: ['default', 'small','large'],
            control: { type: 'radio' }
          },
          direction: {
            options: ['Drop-down', 'Drop-up','Drop-end','Drop-start'],
            control: { type: 'radio' }
          },

         
    }
} as Meta

const Template: Story<AppComponent> = (args:AppComponent) => ({
    props: args,
    template:`<rds-dropdown
    dropdownStyle="btn-secondary"
    size="default"
    [darkDropdown]="false"
    [listItems]="listItems"
    label="Dropdown button"
    direction="Drop-down"
    color=""
    textColor=""

    [DropdownItems]="DropdownItems"
  >
   <ng-template #DropdownItems  let-val>
   <li (click)="onSelect(i)"  ><a class="dropdown-item" ><i class="bi bi-bootstrap p-1"></i>{{val.value}}</a></li>
   </ng-template>
  
  </rds-dropdown>`
  });

  export const Dropdown = Template.bind({})
  
  Dropdown.args ={
    dropdownStyle:'btn-secondary',
    size:'default',
    darkDropdown:false,
    listItems:[{value:'India',some:'value',id:1},{value:'USA',some:'value',id:2},{value:'Canada',some:'value',id:3}],
    label:'Dropdown button',
    direction:'Drop-down',
    color:'',
    textColor:'',
    dropdownAlignment:[]
    
  }