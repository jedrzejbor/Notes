import React from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import bulbIcon from 'assets/icons/bulb.svg';
import logoIcon from 'assets/icons/logo.svg';
import { Link, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { connect } from 'react-redux';
import { authenticate as authenticateAction } from 'actions';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.notes};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledLogo = styled.img`
  height: 200px;
  color: white;
`;
const StyledForm = styled(Form)`
  border-radius: 5px;
  height: 50vh;
  width: 25vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.3);
`;

const StyledInput = styled(Input)`
  /* border-radius:20px; */
  border: none;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.grey100};
  height: 35px;
  /* width: 70%; */
  font-size: 1.5rem;
  ::placeholder {
    padding-left: 15px;
  }
`;

const StyledIconWrapper = styled.div`
  width: 20%;
  /* background-color:red; */
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`;

const StyledHeading = styled(Heading)`
  width: 45%;
  margin-top: 30px;
  text-align: center;
`;

const StyledHeadingLogin = styled(Heading)`
  margin: 40px 0;
`;

const StyledButton = styled(Button)`
  margin: 30px 0;
`;
const StyledLink = styled(Link)`
  color: black;
`;

const LoginPanel = ({ userID, register, authenticate }) => {
  return (
    <StyledWrapper>
      <StyledLogo src={logoIcon} alt="logo" />
      <StyledHeading>Your new favourite online notes experience</StyledHeading>
      <StyledIconWrapper>
        <img src={penIcon} alt="pen" />
        <img src={twitterIcon} alt="twitter" />
        <img src={bulbIcon} alt="bulb" />
      </StyledIconWrapper>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }) => {
          authenticate(username, password);
        }}
      >
        {({ handleChange, handleBlur, values }) => {
          if (userID) {
            return <Redirect to={routes.home} />;
          }
          return (
            <StyledForm>
              <StyledHeadingLogin>{register ? `Create account` : `Sign in`}</StyledHeadingLogin>
              <StyledInput
                name="username"
                type="text"
                placeholder="login"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <StyledInput
                name="password"
                type="password"
                placeholder="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <StyledButton type="submit" activecolor="notes">
                {register ? 'register' : 'enter favnote'}
              </StyledButton>
              <StyledLink to={register ? routes.login : routes.register}>
                {register ? 'I wand to log in!' : 'I want my account!'}
              </StyledLink>
            </StyledForm>
          );
        }}
      </Formik>
    </StyledWrapper>
  );
};

const mapStateToProps = ({ userID = null }) => ({
  userID,
});

const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPanel);
