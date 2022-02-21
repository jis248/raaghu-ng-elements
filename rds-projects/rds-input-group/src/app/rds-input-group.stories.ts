import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

export default {
    title: 'Component/Forms/rds-input-group',
    component: AppComponent,
    argTypes: {

    }
} as Meta

const Template: Story<AppComponent> = (args: AppComponent) => ({
    props: args,
});

export const InputGroup = Template.bind({})

InputGroup.args = {
    inpuGroupSize: 'sm',
    inputGroupItem: [
          
        {
            type: 'label',
            displayName:'Label'

        },
        {
            type: 'radio',
            disabled: false,
            value:true 

        },
        {
            type: 'checkbox',
            disabled: false,
            value:true 

        },
        {
            type: 'button',
            label: 'Label',
            buttonType: 'primary',
            size: 'sm',
            link : 'http://localhost:3000/rds-button/main.js'
        },
        {
            type: 'select',
            disabled: false,
            multiple: false,
            listItems: [{ value: 'India', some: 'value' }, { value: 'USA' }, { value: 'Canada' }],
            size:'sm'
        },
        {
            type: 'dropdown',
            disabled: false,
            listItems: [{ value: 'India', some: 'value' }, { value: 'USA' }, { value: 'Canada' }],
            displayName:'Button',
            buttonType:'secondary',
            size:'sm'
        }
    ]

}
