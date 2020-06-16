import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  margin: 70px 70px;
  width: 40%;
`;

const StyledHeading = styled(Heading)`
  margin: 0;
`;

const StyledParagraph = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: #434343;
  margin: 0;
  /* margin-bottom: 30px; */
`;

const StyledAvatar = styled.img`
  width: 100px;
  height: 100px;
  /* border: 5px solid ${({ theme }) => theme.twitters}; */
  border-radius: 50px;
  /* position: absolute; */
  /* right: 200px; */
  /* top: 50px; */
`;
const StyledTwitterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
`;
const StyledContent = styled.p`
  margin: 10px 0 0;
`;

const StyledLink = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.black};
  /* margin-top: 15px; */
  /* padding-top: 10px; */
`;

const StyledA = styled.a`
  display: block;
  color: ${({ theme }) => theme.black};
  margin: 15px 0;
`;
const StyledButton = styled(Button)`
  display: felx;
  justify-content: center;
  align-items: center;
  margin: 80px 0 20px 0;
  text-decoration: none;
`;

const DetailsTemplate = ({ pageContext, title, twitterName, created, articleUrl, content }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledTwitterWrapper>
        <div>
          <StyledHeading>{title}</StyledHeading>
          <StyledParagraph>{created}</StyledParagraph>
        </div>
        {pageContext === 'twitters' && (
          <StyledAvatar src="https://yt3.ggpht.com/a/AATXAJw3R4al8mLWXHqKHSEboR4AVrcS1o87GLKk4g=s900-c-k-c0xffffffff-no-rj-mo" />
        )}
      </StyledTwitterWrapper>
      <StyledContent>{content}</StyledContent>
      {pageContext === 'twitters' && (
        <StyledA href={`https://twitter.com/${twitterName}`}>OPEN THIS TWITTER</StyledA>
      )}
      {pageContext === 'articles' && <StyledA href={articleUrl}>OPEN THIS ARTICLE</StyledA>}
      <StyledButton as={Link} to={`/${pageContext}`} activecolor={pageContext}>
        CLOSE/SAVE
      </StyledButton>
      <StyledLink to="/">remove note</StyledLink>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'articles', 'twitters']).isRequired,
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  created: '',
  content: '',
  articleUrl: '',
  twitterName: '',
};

export default withContext(DetailsTemplate);
