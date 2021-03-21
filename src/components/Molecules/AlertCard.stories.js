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
export const Dark  = Template.bind({});
Dark.args = {
    class: "card-dark"
};