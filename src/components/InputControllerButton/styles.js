import styled from 'styled-components';
import DefaultColors from '~/styles/DefaultColors';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const InputButton = styled.button`
  border-radius: 5px;
  font-size: 18px;
  padding: 13px 17px;
  color: #fff;
  background: ${props =>
    props.color ? `${props.color}` : `${DefaultColors.lightCyanHex}`};
`;
