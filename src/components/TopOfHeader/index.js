import React from 'react';
import { FiSearch, FiHelpCircle } from 'react-icons/fi';

import Notifications from '../Notifications';
import ProfileHeader from '../ProfileHeader';

import {
  TopOfHeader,
  SearchBar,
  SearchBox,
  SearchButton,
  SearchInput,
  ProfileBar,
  HelpIcon,
} from './styles';

export default function TopOfHeaderComponent() {
  return (
    <TopOfHeader>
      <SearchBar>
        <SearchBox>
          <SearchButton>
            <FiSearch size={24} />
          </SearchButton>
          <SearchInput name="search" placeholder="Pesquisa..." />
        </SearchBox>
      </SearchBar>

      <ProfileBar>
        <Notifications />

        <HelpIcon href="#/">
          <FiHelpCircle size={24} />
        </HelpIcon>

        <ProfileHeader />
      </ProfileBar>
    </TopOfHeader>
  );
}
