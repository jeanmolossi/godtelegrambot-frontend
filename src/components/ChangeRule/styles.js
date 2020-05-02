import styled, { css } from 'styled-components';

import DefaultColors from '~/styles/DefaultColors';

export const Container = styled.div`
  display: flex;
  margin: 10px;
  flex: 1;
`;

export const RulesListButtons = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  & > li {
    width: 100%;
    flex: 1;
    display: flex;
    margin: 10px 0;
  }
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 10px 0;
  font-size: 16px;
  background: none;
  transition: all 0.2s ease;

  cursor: pointer;
  pointer-events: all;

  & > svg {
    font-size: 24px;
    color: ${DefaultColors.greyBlue};
    transition: all 0.2s ease;
    color: ${DefaultColors.violetHex};

    & > circle {
      fill: ${DefaultColors.violetHex};
      cx: 16;
    }

    ${props =>
      props.active === false &&
      css`
        color: ${DefaultColors.greyBlue};
        & > circle {
          cx: 8;
          fill: none;
        }
      `}
  }

  ${props =>
    props.loadingRule &&
    css`
      cursor: not-allowed;
      pointer-events: none;
      opacity: 0.3;
    `}
`;
