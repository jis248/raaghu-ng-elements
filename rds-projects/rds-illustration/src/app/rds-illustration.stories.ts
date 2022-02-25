import { Meta, Story } from "@storybook/angular/types-6-0";
import { AppComponent } from "./app.component";
import { componentWrapperDecorator } from '@storybook/angular';


export default {
    title: 'Elements/Illustration',
    component: AppComponent,
    argTypes: {

    },
} as Meta

const Template: Story<AppComponent> = (args: AppComponent) => ({
    props: args,
});

export const illustration = Template.bind({})

