import React from 'react';
import Select from './Select';

// Input variations below coraspond to classes in .css

export default {
  component: Select,
  title: 'Design System/Atoms/Select',
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

const Template = args => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    class: 'prime',
};