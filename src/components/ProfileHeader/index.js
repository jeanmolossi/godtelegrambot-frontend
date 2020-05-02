import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import { logOut } from '~/store/modules/auth/actions';

import { ProfileHeader, ProfileButton, ProfileMoreOptions } from './styles';

export default function ProfileHeaderComponent() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const [toggleOptions, setToggleOptions] = useState(false);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <ProfileHeader>
      <ProfileButton onClick={() => setToggleOptions(!toggleOptions)}>
        <img
          src={`https://api.adorable.io/avatars/50/${profile.name}.png`}
          alt="Profile"
        />
        {profile.name}
      </ProfileButton>
      <ProfileMoreOptions toggleOptions={toggleOptions}>
        <ul>
          <li>
            <a href="#/">
              Status: <span>Online</span>
            </a>
          </li>
          <li>
            <Link to="/profile">Configurações</Link>
          </li>
          <li>
            <a href="#/">Política de privacidade</a>
          </li>
          <li>
            <button type="button" onClick={handleLogOut}>
              <FiLogOut />
              Sair do App
            </button>
          </li>
        </ul>
      </ProfileMoreOptions>
    </ProfileHeader>
  );
}
