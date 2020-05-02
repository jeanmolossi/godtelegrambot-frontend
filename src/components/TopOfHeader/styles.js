import styled from 'styled-components';

import DefaultColors from '~/styles/DefaultColors';

export const TopOfHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;

export const SearchBar = styled.div`
  /* max-width: 245px; */
`;

export const SearchBox = styled.div`
  color: ${DefaultColors.seaBlueHex};
  background: ${DefaultColors.backgroundApplication};
  display: flex;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  padding: 17px;
  @media screen and (max-width: 600px) {
    margin-top: 20px;
  }
`;

export const SearchButton = styled.button`
  background: none;
  margin-right: 17px;
`;

export const SearchInput = styled.input`
  background: none;
  font-size: 17px;
  flex: 1;
`;

export const ProfileBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
`;

export const HelpIcon = styled.a`
  color: #fff;
`;
