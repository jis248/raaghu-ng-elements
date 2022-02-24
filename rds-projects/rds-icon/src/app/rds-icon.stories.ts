import { Meta, Story } from "@storybook/angular/types-6-0";
import { AppComponent } from "./app.component";


export default {
    title: 'Elements/Icon',
    component: AppComponent,
    argTypes: {

    },
} as Meta

const Template: Story<AppComponent> = (args: AppComponent) => ({
    props: args,
});

export const icon = Template.bind({})