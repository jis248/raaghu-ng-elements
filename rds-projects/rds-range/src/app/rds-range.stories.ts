import { Meta, Story } from "@storybook/angular/types-6-0";
import { AppComponent } from "./app.component";
import { componentWrapperDecorator } from '@storybook/angular';


export default {
    title: 'Elements/Range',
    component: AppComponent,
    argTypes: {

    },
    parameters: {
        layout: 'padded'
    },
    decorators: [componentWrapperDecorator((story: any) => `<div style="margin: 3em">${story}</div>`)]
} as Meta

const Template: Story<AppComponent> = (args: AppComponent) => ({
    props: args,
});

export const Range = Template.bind({})

Range.args = {
    min: 500,
    max: 1000,
    disabled: false,
    // step:'0.5'
}