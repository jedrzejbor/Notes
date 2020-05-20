// import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: ${({ theme }) => theme.bold};
  font-size: 16px;
  text-transform: uppercase;
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(0, 0%, 90%);
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
