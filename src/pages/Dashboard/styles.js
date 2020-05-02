import styled from 'styled-components';

import DefaultColors from '../../styles/DefaultColors';

export const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
  flex-direction: column;
`;

export const MoreActionsTable = styled.button`
  position: relative;
  background: none;

  &:hover,
  &:active,
  &:focus {
    & > div:nth-child(2) {
      visibility: visible;
    }
  }
`;

export const IconBox = styled.a`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${DefaultColors.lightOrange};
  border-radius: 50%;
`;
