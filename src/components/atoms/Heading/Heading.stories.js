import React from 'react';
import Heading from './Heading';

export default {
  component: Heading,
  title: 'Atoms/Heading',
};

export const Normal = () => {
  return <Heading>Welcome</Heading>;
};
export const big = () => {
  return <Heading big>Welcome Jedrzej</Heading>;
};
