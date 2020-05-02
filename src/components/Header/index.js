import React from 'react';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import TopOfHeader from '../TopOfHeader';
import HeaderCards from '../HeaderCards';

import { Container, BreadCumbsBar, WhereIam, MoreLocations } from './styles';

export default function Header() {
  return (
    <Container>
      <TopOfHeader />

      <BreadCumbsBar>
        <WhereIam to="/dashboard">
          Home <FiHome />
        </WhereIam>
        <MoreLocations>
          <Link to="/dashboard">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </MoreLocations>
      </BreadCumbsBar>

      <HeaderCards />
    </Container>
  );
}
