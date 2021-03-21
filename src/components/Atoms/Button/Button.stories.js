import React from 'react';
import Button from './Button';

// button variations below coraspond to classes in .css

export default {
  component: Button,
  title: 'Buttons',
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    txt: 'Test Button',
    class: 'prime',
};

export const Second  = Template.bind({});
Second.args = {
    txt: 'Second Test Button',
    class: "second"
};

export const Third  = Template.bind({});
Third.args = {
    txt: 'Third Test Button',
    class: "third"
};