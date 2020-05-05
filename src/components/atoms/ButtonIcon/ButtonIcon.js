import styled from 'styled-components';

const ButtonIcon = styled.button`
  /* background-color: ${({ theme }) => theme.primary}; */
  display:block;
  margin:0;
  padding: 0;
  height: 67px;
  width: 67px;
  border: none;
  border-radius: 20px;
  font-size: 2rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;

  &.active {
    background-color: white;
  }
  
`;
export default ButtonIcon;
