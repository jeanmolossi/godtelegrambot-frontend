import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

import DefaultColors from '~/styles/DefaultColors';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  & > div:first-child {
    padding: 0;
  }

  @media screen and (min-width: 801px) {
    & > div:first-child {
      max-width: 425px;
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;

    & > div {
      width: 100%;
    }
  }
`;

export const Profilebox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Headerbox = styled.div`
  width: 100%;
  height: 250px;
  background: url(${props => props.bg && `${props.bg}/800x600`});
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 3px 6px ${DefaultColors.lightShadows};
`;

export const MiddleBox = styled.div`
  margin-top: -75px;
`;

export const ProfileImage = styled.img`
  background: ${DefaultColors.backgroundApplication};
  border: 2px solid ${DefaultColors.backgroundApplication};
  border-radius: 50%;
  box-shadow: 0 3px 6px ${DefaultColors.lightShadows};
`;

export const ProfileName = styled.h1`
  font-size: 25px;
  text-align: center;
  margin: 25px 0;
`;

export const CardForm = styled(Form)`
  & > div {
    margin-bottom: 25px;
  }
  & > div > div > input {
    background: #f7fafc !important;
  }
`;

export const DeactivateAccount = styled.button`
  margin-bottom: 25px;
  padding: 13px 17px;
  font-size: 18px;
  border-radius: 5px;
  background: ${DefaultColors.littleRedHex};
  color: #fff;
  font-weight: 400;
`;

export const BlackFilter = styled.div`
  visibility: ${props => (props.opened ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 80;
`;

export const ConfirmPopUp = styled.div`
  border-radius: 10px;
  background: ${DefaultColors.backgroundApplication};
  box-shadow: 0 3px 17px ${DefaultColors.mediumShadows};

  min-height: 20vh;
  max-width: 425px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.2s ease;

  transform: ${props => (props.opened ? 'scale(1)' : 'scale(0.3)')};
  opacity: ${props => (props.opened ? '1' : '0')};
`;

export const MiddleText = styled.div`
  display: flex;
  flex: 1;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  margin-bottom: 17px;
  align-items: center;
  text-align: center;
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  align-items: center;

  & > button,
  & > a {
    background: ${DefaultColors.backgroundApplication};
    padding: 13px 23px;
    border-radius: 5px;

    font-size: 16px;
  }
`;

export const ConfirmForm = styled(Form)``;

export const ConfirmButton = styled.button`
  background: ${DefaultColors.littleRedHex} !important;
  color: #fff;
`;

export const CancelButton = styled.button.attrs({
  type: 'button',
})`
  background: #fff !important;
  color: #333;
  border: 1px solid #333;
`;

export const ApiConfirForm = styled(Form)``;
