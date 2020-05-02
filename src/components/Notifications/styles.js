import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

import DefaultColors from '~/styles/DefaultColors';

export const Notifications = styled.div`
  position: relative;
`;

export const NotificationIcon = styled.button`
  background: none;
  color: #fff;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        content: '';
        width: 9px;
        height: 9px;
        background: ${DefaultColors.orangeHex};
        position: absolute;
        border-radius: 4px;
        right: 0;
      }
    `}
`;

export const NotificationBox = styled.div`
  position: absolute;
  max-width: 300px;
  width: 100vw;
  background: ${DefaultColors.backgroundApplication};
  display: ${props => (props.toggleNotification ? 'block' : 'none')};
  transform: translateX(-50%);
  top: calc(100% + 15px);
  border-radius: 10px;
  color: ${DefaultColors.seaBlueHex};
  padding: 17px;
  padding-right: 0;
  z-index: 2;

  @media screen and (max-width: 600px) {
    transform: translateX(-10px);
  }

  &::after {
    content: '';
    top: -13px;
    left: 50%;
    @media screen and (max-width: 600px) {
      left: 10px;
    }
    transform: translateX(-8px);
    position: absolute;
    border-bottom: 20px solid ${DefaultColors.backgroundApplication};
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }
`;

export const NotificationsHeader = styled.h1`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 10px;
`;

export const NotificationsList = styled(PerfectScrollbar)`
  max-height: 245px;
  padding-right: 17px;
`;

export const SingleNotification = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid ${DefaultColors.lightShadows};
  }
`;

export const LeftBox = styled.div`
  width: 100%;
  max-width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  height: 100%;
`;

export const IconBox = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  background: ${DefaultColors.lightOrangeAlpha};
  color: ${DefaultColors.lightOrange};
  border: 1px solid ${DefaultColors.lightOrange};
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  ${props =>
    props.read &&
    css`
      background: ${DefaultColors.lightGreen};
      color: ${DefaultColors.green};
      border: 1px solid ${DefaultColors.green};
    `}
`;

export const MarkAsReadButton = styled.button`
  background: none;
  width: 100%;
  margin-top: 8px;
`;

export const NotificationExcerpt = styled.div`
  max-width: 205px;
`;

export const NotificationInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${DefaultColors.lightGreyBlue};
  margin-bottom: 10px;
`;

export const TheExcerpt = styled.div`
  flex: 1;
`;
