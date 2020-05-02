import React from 'react';
import propTypes from 'prop-types';

import { Container, InputButton } from './styles';

export default function InputControllerButton({ children, ...rest }) {
  return (
    <Container>
      <InputButton {...rest}>{children}</InputButton>
    </Container>
  );
}

InputControllerButton.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.func]).isRequired,
};
