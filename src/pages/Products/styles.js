import styled from 'styled-components';

import DefaultColors from '~/styles/DefaultColors';

export const Container = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: column;

  > div > div > div > table > tbody > tr > td {
    &:last-child {
      text-align: center;
    }
    > a {
      margin: 0 auto;
      border: 2px solid ${DefaultColors.green};
      color: ${DefaultColors.green};
      background: ${DefaultColors.lightGreen};

      display: flex;
      width: 30px;
      height: 30px;
      place-content: center;
      place-items: center;
      border-radius: 50%;
    }
  }
`;
