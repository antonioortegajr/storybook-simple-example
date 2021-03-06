import React from 'react';
import Input from './Input';

// Input variations below coraspond to classes in .css

export default {
    component: Input,
    title: 'Design System/Atoms/Inputs',
    parameters: {
    docs: {
      page: () => (
        <>
          <div>Test</div>
        </>
      ),
    },
  }
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    class: 'prime',
};
