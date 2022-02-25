import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent as RdsCard  } from './app.component';

export default {
  title: 'Elements/Card',
  component: RdsCard,
  argTypes: {
  backgroundColor: { control: 'color' },
  color: { control: 'color' },
  width: { control: 'text' },
  height: { control: 'text' },
  },
  } as Meta;

const Template: Story<RdsCard> = (args: RdsCard) => ({
  props: args,
  template: `<rds-card  [header]="header"
   [footer]="footer"
    width="30%" class="rounded-avatar-basic">
   <ng-template #header>
   <img src="https://picsum.photos/seed/picsum/1200/600" class="card-img-top" alt="">
   </ng-template>
   <ng-template #footer>
   <a href="#" class="btn btn-primary mt-3">Go somewhere</a>
   </ng-template>
   </rds-card>`
  });

  // const teletext = "some text"
  export const Card = Template.bind({});

Card.args = {
  width : '20%',
};

const Avatar: Story<RdsCard> = (args: RdsCard) => ({
  props: args,
  template: `<rds-card  [header]="header"
   [footer]="footer"
    width="30%"
    class="rounded-avatar-left">
   <ng-template #header>
   <div class="banner-image1"><img class="img-responsive" src="https://picsum.photos/seed/picsum/1200/600"></div>
   <img src="https://placekitten.com/300/300" alt="" class="img-avatar-left">
   </ng-template>
   <ng-template #footer>
   <a href="#" class="btn btn-primary mt-3">Go somewhere</a>
   </ng-template>  
   </rds-card>`
  });

  // const teletext = "some text"
  export const withAvatar = Avatar.bind({});

  const Avatarpos: Story<RdsCard> = (args: RdsCard) => ({
    props: args,
    template: `<rds-card  [header]="header"
     [footer]="footer"
      width="28%"
      class="rounded-avatar-center">
     <ng-template #header>
     <div class="banner-image1"><img class="img-responsive" src="https://picsum.photos/seed/picsum/1200/600"></div>
     <img src="https://placekitten.com/300/300" alt="" class="img-avatar">
     </ng-template>  
     <ng-template #footer>
     <a href="#" class="btn btn-primary mt-3">Go somewhere</a>  
     </ng-template>    
     </rds-card>`
    });
  
    // const teletext = "some text"
    export const withAvatarcenter = Avatarpos.bind({});