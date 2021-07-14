import styled from 'styled-components';

export const Wrapper = styled.button`
  display: block;
  background-color: var(--darkGrey);
  font-size: var(--fontBig);
  width: 25%;
  min-width: 200px;
  height: 50px;
  border-radius: 30px;
  border: none;
  color: var(--white);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
