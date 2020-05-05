import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Molecules/Card',
};

export const primary = () => {
  return <Card />;
};
export const secondary = () => {
  return <Card cardType="twitter" />;
};
export const tertiary = () => {
  return <Card cardType="article" />;
};
