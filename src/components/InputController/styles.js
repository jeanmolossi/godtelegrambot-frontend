import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

import DefaultColors from '~/styles/DefaultColors';

export const Container = styled.div`
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
  position: relative;

  & > span {
    position: absolute;
    top: calc(100% + 7px);
    width: 100%;
    text-align: center;
    color: ${DefaultColors.littleRedHex};
  }

  & > svg {
    margin-left: 20px;
  }
`;

export const RealInput = styled(Input)`
  padding: 15px;
  flex: 1;
  color: ${props => props.disabled && `${DefaultColors.littleRedHex}`};
  cursor: ${props => (props.disabled ? 'not-allowed' : `initial`)};
`;
