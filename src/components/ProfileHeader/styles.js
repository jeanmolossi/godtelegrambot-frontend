import styled from 'styled-components';

import DefaultColors from '~/styles/DefaultColors';

export const ProfileHeader = styled.div`
  position: relative;
`;

export const ProfileButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: none;
  color: #fff;

  img {
    border-radius: 50%;
    width: 45px;
    height: 45px;
    margin-right: 10px;
  }
`;

export const ProfileMoreOptions = styled.div`
  display: ${props => (props.toggleOptions ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 15px);
  right: 0;
  z-index: 3;

  background: ${DefaultColors.backgroundApplication};
  width: 175px;
  padding: 17px;
  border-radius: 10px;

  &::after {
    content: '';
    position: absolute;
    top: -15px;
    right: 30px;
    border-bottom: 15px solid ${DefaultColors.backgroundApplication};
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
  }

  & > ul {
    padding: 10px 0;
  }

  & > ul > li {
    display: flex;
    padding: 5px 0;

    &:not(:last-child) {
      border-bottom: 1px solid ${DefaultColors.lightShadows};
      margin-bottom: 10px;
    }

    & > a,
    & > button {
      display: flex;
      padding-bottom: 10px;
      text-align: center;
      width: 100%;
      align-items: center;
      justify-content: center;
      background: none;

      & > svg {
        margin-right: 5px;
      }

      & > span {
        color: ${DefaultColors.green};
      }

      &:hover {
        text-decoration: none;
      }
    }
  }
`;
