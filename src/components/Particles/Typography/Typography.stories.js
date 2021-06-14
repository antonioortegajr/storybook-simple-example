import React from 'react';
import Typography from './Typography';

// Input variations below coraspond to classes in .css

export default {
  component: Typography,
  title: 'Design System/Particles/Typography',
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

const Template = args => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
    class: 'prime',
};