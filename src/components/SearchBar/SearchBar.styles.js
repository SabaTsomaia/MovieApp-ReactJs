import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--medGrey);
  border-radius: 40px;
  color: var(--white);

  img {
    position: absolute;
    left: 25px;
    top: 14px;
    width: 30px;
  }

  input {
    font-size: var(--fontBig);
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);
    border: none;

    :focus {
      outline: none;
    }
  }

  @media only screen and (max-width: 600px) {
    height: 48px;
    width: 95%;

    input {
      font-size: var(--fontMed);
      height: 30px;
    }

    img {
      top: 14px;
      width: 20px;
    }
  }
`;
