import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from './Accordion';
import { action } from "@storybook/addon-actions";

export default {
  title: 'Accordion',
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*  argTypes: {
      backgroundColor: { control: 'color' },
    },*/
} as ComponentMeta<typeof Accordion>;

const onChangeCallback = action('accordion was clicked')

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "Menu",
  collapsed: false,
  onChange: onChangeCallback,
};