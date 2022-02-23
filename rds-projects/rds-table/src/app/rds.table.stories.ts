import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

export default {
  title: 'Elements/Table',
  component: AppComponent,
  argTypes: {

  },
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
  template: `<rds-table  [thead]="thead" [tbody]="tbody" >
    <ng-template #thead>
      <th>Name</th>
      <th>Age</th>
      <th>State</th>
      
    </ng-template>
    <ng-template #tbody let-val>
       <tr>
        <td>{{val.name}}</td>
        <td>{{val.age}}</td>
        <td>{{val.state}}</td>
       </tr>
    </ng-template>
  
  </rds-table>
  `
});



export const BasicTable = Template.bind({})
BasicTable.args = {

}
