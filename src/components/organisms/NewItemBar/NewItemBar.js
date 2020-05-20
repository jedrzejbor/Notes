import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, activecolor }) => theme[activecolor]};
  z-index: 999;
  position: fixed;
  right: 0;
  top: 0;
  padding: 100px 90px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transition: 0.25s ease-in-out;
  ${({ isVisible }) =>
    isVisible === false &&
    css`
      /* right:-680px; tak nie robic */
      transform: translate(100%);
    `}
`;

const StyledTextArea = styled(Input)`
  border-radius: 20px;
  margin: 30px 0 100px;
  height: 30vh;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
`;

const NewItemBar = ({ pageContext, isVisible, addItem }) => {
  return (
    <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
      <Heading>Add a new {pageContext}</Heading>
      <StyledInput placeholder="title" />
      {pageContext === 'twitters' && <StyledInput placeholder="Account Name eg. hello_roman" />}
      {pageContext === 'articles' && <StyledInput placeholder="link" />}
      <StyledTextArea as="textarea" placeholder="title" />
      <Button
        onClick={() =>
          addItem(pageContext, {
            title: 'Hello Roman',
            content: 'lorem ipsum dolor sit amet',
          })
        }
        activecolor={pageContext}
      >
        Add Note
      </Button>
    </StyledWrapper>
  );
};

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
  isVisible: false,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
