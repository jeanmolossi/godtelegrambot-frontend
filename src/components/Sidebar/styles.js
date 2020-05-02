import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import DefaultColors from '~/styles/DefaultColors';

/**
 * SIDEBAR
 */

export const ReOpenButton = styled.button`
  transition: 0.3s ease-in-out;
  position: fixed;
  visibility: ${props => (props.toggle ? 'visible' : 'hidden')};
  opacity: ${props => (props.toggle ? '1' : '0')};
  z-index: 10;
  top: 5vh;
  padding: 10px;
  border-radius: 5px;
  @media screen and (max-width: 600px) {
    right: 0;
  }
  @media screen and (min-width: 601px) {
    left: 0;
  }
`;

export const Sidebar = styled.div`
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  transition: all 0.2 ease-in-out;
  visibility: ${props => (props.toggle ? 'hidden' : 'visible')};
  position: ${props => (props.toggle ? 'absolute' : 'relative')};

  @media screen and (min-width: 601px) {
    max-width: 245px;
    background: #fff;
    display: flex;
    flex-direction: column;
    color: ${DefaultColors.seaBlueHex};
    transition: 0.2s ease-in;
    transform: ${props => props.toggle && 'translateX(-100%)'};
  }
  @media screen and (max-width: 600px) {
    background: #fff;
    position: fixed;
    overflow: hidden;
    padding: 0 17%;
    opacity: ${props => (props.toggle ? '0' : '1')};
    z-index: 10;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  h1 {
    font-size: 25px;
    margin: 20px;
  }
`;

export const ToggleButton = styled.button`
  transition: 0.2 ease-out;
  transform: translateX(0);
  background: none;
`;

export const MenuButtons = styled.ul`
  margin: 20px 0;
  padding: 10px;
`;

export const SingleButtonBox = styled.li`
  flex: 1;
`;

export const LinkButton = styled(NavLink)`
  display: flex;
  padding: 15px 20px;
  border-radius: 5px;
  align-items: center;
  background: none;
  font-weight: 400;
  font-size: 15px;
  color: ${DefaultColors.orangeHex};
  transition: 0.2s ease-in-out;

  &.active {
    background: ${DefaultColors.backgroundApplication};
    color: ${DefaultColors.violetHex};
  }

  &:hover {
    text-decoration: none;
    background: ${DefaultColors.backgroundApplication};
  }

  svg {
    margin-right: 10px;
  }
`;
