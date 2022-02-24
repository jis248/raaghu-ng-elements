import { Story, Meta } from '@storybook/angular/types-6-0';
import {AppComponent as RdsNavbarComponent } from './app.component';
export default {

  title: 'Elements/Navbar',
  component: RdsNavbarComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
       },
      } as Meta;

const Template: Story<RdsNavbarComponent> = (args: RdsNavbarComponent) => ({

  props: args,
 });
 export const BasicNavbar: Story<RdsNavbarComponent> = (args) => ({
  props: args,
  template :`<rds-nav-bar 
  navbarId="navbarSupportedContent"  
  [navbarheader]="navbarheader"
  [navbarcontent]="navbarcontent"
  [navbarItems]="navbarItems"
  [backgroundColor]=
  >
<ng-template #navbarheader>
<a class="navbar-brand" href="#">Navbar</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>

</button>

</ng-template>    
<ng-template #navbarcontent let-val>
<li class="nav-item" >
<a class="nav-link" [ngClass]="val.navclass" [href]="val.href">{{val.label}}</a>
</li>
</ng-template> 
</rds-nav-bar>
`

});

BasicNavbar.args = {
  backgroundColor: '#dee2e6',
  type:'large',
  navbarItems:[  {
    label:"Home",
    isActive:true,
    navclass:'',
    href:'',
  },
  {
    label:"Features",
    isActive:false,
    navclass:'',
    href:'',
  },
  {
    label:"Pricing",
    isActive:false,
    navclass:'',
    href:'',
  }]
};



