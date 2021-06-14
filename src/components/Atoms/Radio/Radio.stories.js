import React from 'react';
import Radio from './Radio';

// Input variations below coraspond to classes in .css

export default {
  component: Radio,
  title: 'Design System/Atoms/Radio',
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

const Template = args => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
    class: 'prime',
};