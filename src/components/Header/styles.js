import styled from 'styled-components';
import { Link } from 'react-router-dom';

import DefaultColors from '~/styles/DefaultColors';

/**
 * CARDS
 */

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  max-height: 475px;
  height: 100vh;

  background: ${DefaultColors.seaBlueHex};
  color: #fff;

  margin-bottom: -80px;
`;

export const BreadCumbsBar = styled.div`
  display: flex;
  width: 100%;
  margin: 40px 0;
  padding: 0 20px;
  align-items: baseline;
`;

export const WhereIam = styled(Link)`
  color: #fff;
  display: flex;
  font-size: 25px;
  font-weight: 600;
  margin-right: 20px;
  align-items: center;
  justify-content: space-between;
  min-width: 130px;

  &:hover {
    text-decoration: none;
  }
`;

export const MoreLocations = styled.div`
  & > a {
    color: #fff;

    &:hover {
      text-decoration: none;
    }

    &:not(:last-child)::after {
      content: ' - ';
      text-decoration: none;
      margin: 0 10px;
      cursor: default;
    }
  }
`;
