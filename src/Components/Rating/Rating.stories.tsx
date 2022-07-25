import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Rating} from './Rating';
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Rating',
  component: Rating,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
/*  argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} as ComponentMeta<typeof Rating>;

const onClickCallback = action('some item was clicked')

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  value: 0,
  onClick: onClickCallback,
};

/*
export const valueOne = Template.bind({});
valueOne.args = {
  value: 1,
};

export const valueTwo = Template.bind({});
valueTwo.args = {
  value: 2,
};
*/



