import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OnOff } from './OnOff';
import { action } from "@storybook/addon-actions";

export default {
  title: 'OnOff',
  component: OnOff,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*  argTypes: {
      backgroundColor: { control: 'color' },
    },*/
} as ComponentMeta<typeof OnOff>;

const callback = action('on or off was clicked!!!!' )

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  condition: true,
  onChange: callback,
};