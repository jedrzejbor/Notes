import React from 'react';

import Paragraph from './Paragraph';

export default {
  component: Paragraph,
  title: 'Atoms/Paragraph',
};

export const normal = () => {
  return <Paragraph>hello, how are you?</Paragraph>;
};
