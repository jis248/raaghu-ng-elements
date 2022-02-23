import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

export default {
    title: 'Elements/Datepicker',
    component: AppComponent,
    decorators: [
      moduleMetadata({
        imports: [ BsDatepickerModule.forRoot(),BrowserAnimationsModule],
      }),
    ],
      argTypes: {
      },
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
    props: args,
});
export const Basic = Template.bind({});