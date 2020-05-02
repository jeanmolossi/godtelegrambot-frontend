import styled from 'styled-components';

import DefaultColors from '~/styles/DefaultColors';

export const Container = styled.div`
  height: 100vh;
  flex: 1;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  background: ${DefaultColors.backgroundApplication};
`;

export const ContentFixer = styled.div`
  width: 100%;
  max-width: 1660px;
  margin: 0 auto;
`;
