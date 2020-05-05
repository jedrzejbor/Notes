import React from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Atoms/Input',
};

export const normal = () => {
  return <Input placeholder="login" />;
};
export const Search = () => {
  return <Input placeholder="search" search />;
};
