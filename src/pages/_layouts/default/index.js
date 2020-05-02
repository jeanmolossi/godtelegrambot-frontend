import React from 'react';
import propTypes from 'prop-types';

import Sidebar from '~/components/Sidebar';
import Header from '~/components/Header';

import { Container, Content, ContentFixer } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Header />
        <ContentFixer>{children}</ContentFixer>
      </Content>
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: propTypes.element.isRequired,
};
