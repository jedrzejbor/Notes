import styled from 'styled-components';

const ButtonIcon = styled.button`
  background-color: ${({ theme }) => theme.primary};
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 50px;
  font-size: 5rem;
`;
export default ButtonIcon;
