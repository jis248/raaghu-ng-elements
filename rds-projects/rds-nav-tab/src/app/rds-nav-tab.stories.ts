import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsNavTabComponent } from './RdsNavTab.component';
export default {

    title: 'Elements/Navtabs',

    component: RdsNavTabComponent,

    argTypes: {
    },

} as Meta;

const Template: Story<RdsNavTabComponent> = (args: RdsNavTabComponent) => ({
    props: args,

});
export const Basic = Template.bind({});
Basic.args = {
    verticalAlignment: false,
    navtabsItems: [
        { label: 'Active', link: '#' },
        { label: 'Link', link: '#' },
        { label: 'Link', link: '#' },
        { label: 'Disabled', link: '#', disabled: "true" },
    ]
}
export const Tabs = Template.bind({});
Tabs.args = {
    tabs: true,
    navtabsItems: [
        { label: 'Active', link: '#' },
        { label: 'Link', link: '#' },
        { label: 'Link', link: '#' },
        { label: 'Disabled', link: '#', disabled: "true" },
    ]
}
export const Pills = Template.bind({});
Pills.args = {
    pills: true,
    fill: false,
    justified: false,
    flex: false,
    navtabsItems: [
        { label: 'Active', link: '#' },
        { label: 'Link', link: '#' },
        { label: 'Link', link: '#' },
        { label: 'Disabled', link: '#', disabled: "true" },
    ]
}






