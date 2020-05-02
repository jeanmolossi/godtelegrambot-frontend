import styled, { css } from 'styled-components';

import DefaultColors from '~/styles/DefaultColors';

export const Container = styled.div`
  flex: 1;
  border-radius: 10px;
  background: #fff;
  padding: 17px;
  box-shadow: 0 3px 6px ${DefaultColors.mediumShadows};
  margin: 10px;
  position: relative;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  h1 {
    font-size: 18px;
    font-weight: 400;
    display: flex;
    flex-direction: column-reverse;
    border-bottom: 1px solid ${DefaultColors.lightShadows};
    padding-bottom: 17px;

    small {
      text-transform: uppercase;
      font-size: 11px;
      font-weight: 400;
      color: ${DefaultColors.lightGreyBlue};
    }
  }

  ${props =>
    props.loading === 'true' &&
    css`
      &::after {
        content: 'Carregando...';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #fff;
        top: 0;
        left: 0;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}
`;
