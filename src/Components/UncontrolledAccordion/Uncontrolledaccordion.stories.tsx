import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UncontrolledAccordion from './UncontrolledAccordion';
import { action } from "@storybook/addon-actions";

export default {
  title: 'UncontrolledAccordion',
  component: UncontrolledAccordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*  argTypes: {
      backgroundColor: { control: 'color' },
    },*/
} as ComponentMeta<typeof UncontrolledAccordion>;

const onChangeCallback = action('accordion was clicked')

const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Menu",
};