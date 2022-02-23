// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent as RdsCarousel } from './app.component';

export default {
  title: 'Elements/Carousel',
    component: RdsCarousel,
//   argTypes: {
//       backgroundColor: { control: 'color' },
//       borderColor: { control: 'color' },
//       Color: { control: 'color' },
//   },
} as Meta;

const Template: Story<RdsCarousel> = (args: RdsCarousel) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
    crossFade: true,
    controls: true,
    imageItem: [
      {
        img: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
        caption: 'this is the caption section were u can add the caption for the image'
      },
      {
        img : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        caption: 'this is the caption section were u can add the caption for the image'
      }
    ],
    indicators: true,
};

