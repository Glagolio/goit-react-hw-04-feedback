import styled from '@emotion/styled';

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 24px;
  background-color: transparent;
  border: 2px black solid;
  border-radius: 8px;
  cursor: pointer;
  transition: color 250ms linear;
  transition: background-color 250ms linear;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export default Button;
