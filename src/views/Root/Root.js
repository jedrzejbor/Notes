import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello Jedrzej</h1>
        <Button>Close / Save</Button>
        <Button secondary>Remove</Button>
        <ButtonIcon>+</ButtonIcon>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
