import { APP_BASE_HREF } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

export default {
    title: 'Elements/Input Group',
    decorators: [
        moduleMetadata({
            imports: [],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: APP_BASE_HREF, useValue: "/" }
            ]
        }),
    ],
    component: AppComponent,
    argTypes: {

    }
} as Meta

const Template: Story<AppComponent> = (args: AppComponent) => ({
    props: args,
});

export const InputGroup = Template.bind({})

// InputGroup.args = {
//     inpuGroupSize: 'sm',
//     inputGroupItem: [
//         {
//             type: 'button',
//         }
//     ]

// }
