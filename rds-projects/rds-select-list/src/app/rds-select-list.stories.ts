import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

export default {
    title: 'ELEMENTS/rds-select-list',
    component: AppComponent,
    argTypes: {
        size: {
            options: ['default', 'small','large'],
            control: { type: 'radio' }
          },
        disabled:{control:{ type:'boolean'}},
        multiple:{control:{ type:'boolean'}},
        showSizeAttribute:{control:{ type:'boolean'}},
        selectSize: {control:{ type:'text'}},
        customIcon: {control:{ type:'text'}}
      }
}as Meta


const Template: Story<AppComponent> = (args:AppComponent) => ({
    props: args,
    template:`<rds-select-list
    size="default"
    selectSize="default"
    [showSizeAttribute]="false"
    [disabled]="false"
    [multiple]="false"
    customIcon=""
    [lisItems]="listItems"
    [DropdownItems]="DropdownItems"
    
  >
  
  <ng-template #DropdownItems  let-val>
  <option >{{val.value}}</option>
  </ng-template>
  
  </rds-select-list>`
  });

export const Default = Template.bind({});

Default.args ={
    size:'default',
    disabled:false,
    multiple:false,
    showSizeAttribute:false,
    selectSize:'default',
    customIcon:'',
    floatinginputLabel:""
}
