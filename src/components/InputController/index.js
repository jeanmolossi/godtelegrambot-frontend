import React from 'react';
import propTypes from 'prop-types';

import { Container, InputBox, RealInput } from './styles';

export default function InputController({ icon: Icon, ...args }) {
  return (
    <Container>
      <InputBox>
        <Icon size={24} />
        <RealInput {...args} />
      </InputBox>
    </Container>
  );
}

InputController.propTypes = {
  icon: propTypes.oneOfType([
    propTypes.element,
    propTypes.object,
    propTypes.symbol,
    propTypes.string,
    propTypes.array,
    propTypes.func,
  ]).isRequired,
};
