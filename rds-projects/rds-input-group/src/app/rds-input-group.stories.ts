import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent as RdsInputGroupComponent } from './app.component';
import { AppComponent as RdsInputComponent } from '../../../rds-input/src/app/app.component';
import { AppComponent as RdsSelectListComponent } from '../../../rds-select-list/src/app/app.component';

export default {

    title: 'Elements/Input Group',
    component: RdsInputGroupComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsInputComponent,RdsSelectListComponent],
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