import React from 'react';
import propTypes from 'prop-types';

import { Container } from './styles';

export default function CardLayout({ children, loading, ...rest }) {
  return (
    <Container loading={loading.toString()} {...rest}>
      {children}
    </Container>
  );
}

CardLayout.propTypes = {
  children: propTypes.oneOfType([
    propTypes.element,
    propTypes.func,
    propTypes.symbol,
    propTypes.array,
  ]).isRequired,
  loading: propTypes.bool,
};

CardLayout.defaultProps = {
  loading: false,
};
