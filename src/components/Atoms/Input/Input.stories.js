import React from 'react';
import Input from './Input';

// Input variations below coraspond to classes in .css

export default {
  component: Input,
  title: 'Inputs',
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    class: 'prime',
};

export const Second  = Template.bind({});
Second.args = {
    class: "second"
};

export const Third  = Template.bind({});
Third.args = {
    class: "third"
};