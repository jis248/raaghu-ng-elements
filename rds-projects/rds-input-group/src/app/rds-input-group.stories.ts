
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent as RdsInputGroupComponent } from './app.component';


export default {

    title: 'Elements/Input Group',
    component: RdsInputGroupComponent,
    // decorators: [
    //     moduleMetadata({
    //         declarations: [RdsInputComponent, RdsSelectListComponent],
    //         schemas: [CUSTOM_ELEMENTS_SCHEMA],
    //     }),
    // ],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const inputGroup: Story<RdsInputGroupComponent> = (args) => ({
    props: args,

    template: `<rds-input-group>
    <input   type="text" class="form-control"  id="Errormessage" placeholder="placeholder">    
    <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>  
    </rds-input-group>`

});

inputGroup.args = {
    inpuGroupSize: 'md',
}