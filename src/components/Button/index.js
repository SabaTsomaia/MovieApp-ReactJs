import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Button.styles';

const Button = ({ text, callBack }) => (
  <Wrapper type='button' onClick={callBack}>
    {text}
  </Wrapper>
);

Button.propTypes = {
  text: PropTypes.string,
  callBack: PropTypes.func,
};
export default Button;
