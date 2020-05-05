import React from 'react';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoutIcon from 'assets/icons/logout.svg';
import plusIcon from 'assets/icons/plus.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.note};
`;

export default {
  component: ButtonIcon,
  title: 'Atoms/ButtonIcon',
  decorators: [(story) => <YellowBackground>{story()}</YellowBackground>],
};

export const bulb = () => {
  return <ButtonIcon active icon={bulbIcon} />;
};

export const pen = () => {
  return <ButtonIcon icon={penIcon} />;
};
export const twitter = () => {
  return <ButtonIcon icon={twitterIcon} />;
};
export const logout = () => {
  return <ButtonIcon icon={logoutIcon} />;
};

export const plus = () => {
  return <ButtonIcon icon={plusIcon} />;
};
