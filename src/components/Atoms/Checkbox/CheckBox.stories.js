import React from 'react';
import CheckBox from './CheckBox';

// Input variations below coraspond to classes in .css

export default {
  component: CheckBox,
  title: 'Design System/Atoms/CheckBox',
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

const Template = args => <CheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {
    class: 'prime',
};