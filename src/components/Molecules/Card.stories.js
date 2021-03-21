import React from 'react';
import Card from './Card';

// button variations below coraspond to classes in .css

export default {
  component: Card,
  title: 'Design System/Molecules/Card',
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    class: 'card',
};
export const Second  = Template.bind({});
Second.args = {
    class: "card-dark"
};