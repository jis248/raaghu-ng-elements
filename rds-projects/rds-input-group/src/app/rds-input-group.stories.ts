// import { APP_BASE_HREF } from '@angular/common';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { moduleMetadata } from '@storybook/angular';
// import { Story, Meta } from '@storybook/angular/types-6-0';
// import { AppComponent } from './app.component';

// export default {
//     title: 'Elements/Input Group',
//     decorators: [
//         moduleMetadata({
//             imports: [],
//             schemas: [CUSTOM_ELEMENTS_SCHEMA],
//             providers: [
//                 { provide: APP_BASE_HREF, useValue: "/" }
//             ]
//         }),
//     ],
//     component: AppComponent,
//     argTypes: {

//     }
// } as Meta

// const Template: Story<AppComponent> = (args: AppComponent) => ({
//     props: args,
// });

// export const InputGroup = Template.bind({})

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent as RdsInputGroupComponent } from './app.component';
import { AppComponent as RdsInputComponent } from '../../../rds-input/src/app/app.component';
import { AppComponent as RdsSelectListComponent } from '../../../rds-select-list/src/app/app.component';
import { AppComponent as RdsButtonComponent } from '../../../rds-button/src/app/app.component';
import { AppComponent as RdsRadioButtonComponent } from '../../../rds-radio-buttons/src/app/app.component';
import { AppComponent as RdsCheckboxComponent } from '../../../rds-checkbox/src/app/app.component';



export default {

    title: 'Elements/Input Group',
    component: RdsInputGroupComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsInputComponent,RdsSelectListComponent,RdsButtonComponent,RdsRadioButtonComponent,RdsCheckboxComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            // providers: [
            //     { provide: APP_BASE_HREF, useValue: "/" }
            // ]
        }),
    ],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const inputGroup: Story<RdsInputGroupComponent> = (args) => ({
    props: args,

    template: `<rds-input-group 
  [inputGroupItems]="inputGroupItems">
    <ng-template #inputGroupItems>
    <rds-input [inputType]="'text'"></rds-input>
    <rds-input [inputType]="'file'"></rds-input>
    <rds-select-list
    size="default"
    selectSize="default"
    [showSizeAttribute]="false"
    [disabled]="false"
    [multiple]="false"
    customIcon=""
    [lisItems]="listItems"
    [DropdownItems]="DropdownItems">
        <ng-template #DropdownItems  let-val>
        <option >{{val.value}}</option>
        </ng-template>
  </rds-select-list>
    </ng-template>    
    </rds-input-group>`

});

inputGroup.args = {
    inpuGroupSize: 'md',
}