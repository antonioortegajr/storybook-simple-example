import React from 'react';
import AlertCard from './AlertCard';

// button variations below coraspond to classes in .css

export default {
  component: AlertCard,
  title: 'Design System/Molecules/AlertCard',
};

const Template = args => <AlertCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    class: 'card',
};
export const Dark  = Template.bind({});
Dark.args = {
    class: "card-dark"
};