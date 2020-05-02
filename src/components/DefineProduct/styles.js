import styled, { css } from 'styled-components';

import DefaultColors from '~/styles/DefaultColors';

export const Container = styled.div`
  margin: 0 10px;

  > div > h1 {
    margin-bottom: 10px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 2px solid ${DefaultColors.mediumShadows};
  border-radius: 5px;

  & + div {
    margin-top: 10px;
  }

  > div {
    margin: 10px 0;

    > h2 {
      font-weight: 400;
    }

    > small {
      display: flex;
      justify-content: space-between;
      color: ${DefaultColors.lightGreyBlue};
      align-items: center;
    }
  }

  > p {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${DefaultColors.mediumShadows};
    padding-bottom: 20px;

    > span > b {
      font-weight: 400;
    }
  }

  ${props =>
    props.active &&
    css`
      border-color: ${DefaultColors.lightGreen};
    `}
`;

export const SyncButton = styled.button`
  padding: 5px 8px;
  border-radius: 4px;
  background: ${DefaultColors.lightCyanHex};
  color: #fff;

  ${props =>
    props.loadingState &&
    css`
      opacity: 0.4;
      pointer-events: none;
      content: 'Carregando...';
    `}
`;
