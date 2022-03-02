import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent as RdsColorpickerComponent } from './app.component';


export default {
    title: 'Elements/Color Picker',
    component: RdsColorpickerComponent,
} as Meta

const Template: Story<RdsColorpickerComponent> = (args: RdsColorpickerComponent) => ({
    props: args,
});

export const ColorPicker = Template.bind({})
ColorPicker.args = {
    title: 'Pick your color',
    label: 'Color picker',
    value: '#800080',
    disabled: false
}
