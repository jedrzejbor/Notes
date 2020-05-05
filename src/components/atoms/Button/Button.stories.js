import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  component: Button,
  title: 'Atoms/Button',
  decorators: [withKnobs],
};

export const primary = () => {
  const label = 'Colors';
  const options = {
    Primary: 'hsl(49,100%,58%)',
    Secondary: 'hsl(196,83%,75%)',
    Teriaryry: 'hsl(106,47%,64%)',
  };
  const defaultValue = 'hsl(49, 100%, 58%)';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);
  return <Button color={value}>Hello Jedrzej</Button>;
};
export const secondary = () => {
  const label = 'Colors';
  const options = {
    Primary: 'hsl(0,0%,90%)',
    Secondary: 'hsl(196,83%,75%)',
    Teriaryry: 'hsl(106,47%,64%)',
  };
  const defaultValue = 'hsl(0, 0%, 90%)';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);
  return (
    <Button secondary color={value}>
      Hello Jedrzej
    </Button>
  );
};
