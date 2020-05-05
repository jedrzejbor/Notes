import React from 'react';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import StoryRouter from 'storybook-react-router';

export default {
  component: Sidebar,
  title: 'Organism/Sidebar',
  decorators: [StoryRouter()],
};

export const normal = () => {
  return <Sidebar />;
};
