import React, { useState } from 'react';
import {
  FiMenu,
  FiX,
  FiHome,
  FiMail,
  FiUser,
  FiUsers,
  FiShoppingBag,
} from 'react-icons/fi';

import {
  ReOpenButton,
  Sidebar,
  SidebarHeader,
  ToggleButton,
  MenuButtons,
  SingleButtonBox,
  LinkButton,
} from './styles';

export default function SidebarComponent() {
  const [isToggle, setIsToggle] = useState(true);

  return (
    <>
      <ReOpenButton
        type="button"
        toggle={isToggle}
        onClick={() => setIsToggle(!isToggle)}
      >
        <FiMenu size={24} />
      </ReOpenButton>
      <Sidebar toggle={isToggle}>
        <SidebarHeader>
          <h1>Menu do Bot</h1>
          <ToggleButton
            type="button"
            toggle={isToggle}
            onClick={() => setIsToggle(!isToggle)}
          >
            <FiX size={24} />
          </ToggleButton>
        </SidebarHeader>
        <MenuButtons>
          <SingleButtonBox>
            <LinkButton to="/dashboard">
              <FiHome size={24} />
              <span>Home</span>
            </LinkButton>
          </SingleButtonBox>
          <SingleButtonBox>
            <LinkButton to="/products">
              <FiShoppingBag size={24} />
              <span>Produtos</span>
            </LinkButton>
          </SingleButtonBox>
          <SingleButtonBox>
            <LinkButton to="/groups">
              <FiUsers size={24} />
              <span>Grupos</span>
            </LinkButton>
          </SingleButtonBox>
          <SingleButtonBox>
            <LinkButton to="/help">
              <FiMail size={24} />
              <span>Inbox</span>
            </LinkButton>
          </SingleButtonBox>
          <SingleButtonBox>
            <LinkButton to="/profile">
              <FiUser size={24} />
              <span>Perfil</span>
            </LinkButton>
          </SingleButtonBox>
        </MenuButtons>
      </Sidebar>
    </>
  );
}
