import React from 'react';
import SimpleForm from './SimpleForm';

// button variations below coraspond to classes in .css

export default {
  component: SimpleForm,
  title: 'Design System/Molecules/SimpleForm',
};

const Template = args => <SimpleForm {...args} />;

export const Default = Template.bind({});
Default.args = {
    class: 'card',
};
export const Dark  = Template.bind({});
Dark.args = {
    class: "card-dark"
};