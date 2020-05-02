import styled from 'styled-components';
import { Form, Input } from '@rocketseat/unform';

import DefaultColors from '~/styles/DefaultColors';
import blubar from '~/assets/Bluebar.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url(${blubar}) ${DefaultColors.seaBlueHex} no-repeat;
  background-position: top left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MiddleCard = styled.div`
  margin: 0 auto;
  width: 100vw;
  max-width: 475px;
  min-height: 465px;
  background: ${DefaultColors.backgroundApplication};
  border-radius: 10px;
  padding: 38px;
  box-shadow: 0 3px 17px ${DefaultColors.mediumShadows};
`;

export const CardHeader = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  h1 {
    font-size: 25px;
    margin-bottom: 10px;
  }

  small {
    display: block;
    margin-bottom: 20px;
    font-size: 15px;
    font-weight: 400;
  }
`;

export const CardForm = styled(Form)`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const ForgotPasswordLink = styled.a`
  margin: 20px 0;
`;

export const InputController = styled.div`
  flex: 1;
  display: flex;
  margin: 17px 0;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const InputBox = styled.div`
  display: flex;
  flex: 1;
  background: #fff;
  box-shadow: 0 2px 4px ${DefaultColors.lightShadows};
  border-radius: 5px;
  align-items: center;

  & > svg {
    margin-left: 20px;
  }
`;

export const RealInput = styled(Input)`
  padding: 15px;
  flex: 1;
`;

export const SignInButton = styled.button`
  padding: 15px;
  background: ${DefaultColors.lightCyanHex};
  color: #fff;
  border-radius: 4px;
  font-size: 18px;
  font-weight: Medium;
`;

export const RegisterText = styled.div`
  margin-top: 20px;
  color: #fff;

  a {
    color: ${DefaultColors.lightCyanHex};
  }
`;
