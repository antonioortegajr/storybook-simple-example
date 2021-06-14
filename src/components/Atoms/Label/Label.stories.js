import React from 'react';
import Label from './Label';

// Input variations below coraspond to classes in .css

export default {
  component: Label,
  title: 'Design System/Atoms/Label',
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

const Template = args => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
    class: 'prime',
};