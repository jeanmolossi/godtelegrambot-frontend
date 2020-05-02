import styled, { css } from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';

import DefaultColors from '~/styles/DefaultColors';

export const HeaderCards = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 10px;
`;

export const CardsBox = styled(PerfectScrollBar)`
  z-index: 1;
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  padding-bottom: 20px;
`;

export const SingleCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  flex-shrink: 0;
  margin: 0 10px;

  background: ${DefaultColors.backgroundApplication};
  border-radius: 10px;
  padding: 20px;
  color: ${DefaultColors.seaBlueHex};
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentLeftBox = styled.div`
  flex: 1;
`;

export const ContentHeader = styled.div`
  color: ${DefaultColors.lightGreyBlue};
  text-transform: uppercase;
  font-size: 11px;
  margin-bottom: 5px;
`;

export const Content = styled.div`
  margin-top: 10px;
  font-size: 18px;
`;

export const ContentRightBox = styled.div`
  width: 50px;
`;

export const IconBox = styled.div`
  display: flex;
  font-size: 25px;
  ${props => {
    if (props && props.red)
      return css`
        background: ${DefaultColors.littleRedHex};
      `;
    if (props && props.budget)
      return css`
        background: ${DefaultColors.violetHex};
      `;
    if (props && props.info)
      return css`
        background: ${DefaultColors.lightCyanHex};
      `;

    return css`
      background: ${DefaultColors.green};
    `;
  }}
  color: #fff;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const CardFooter = styled.div`
  margin-top: 10px;
  font-size: 12px;

  & > span {
    ${props => {
      if (props && props.red)
        return css`
          color: ${DefaultColors.littleRedHex};
        `;
      if (props && props.budget)
        return css`
          color: ${DefaultColors.violetHex};
        `;
      if (props && props.info)
        return css`
          color: ${DefaultColors.lightCyanHex};
        `;

      return css`
        color: ${DefaultColors.green};
      `;
    }}
  }
`;
