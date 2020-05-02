import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

import DefaultColors from '~/styles/DefaultColors';

export const TableBox = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 20px 0;
`;

export const TableOverflow = styled(PerfectScrollbar)`
  z-index: 1;
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  padding-bottom: 20px;
  align-items: center;
`;

export const UsersTable = styled.table`
  width: 100%;
  min-width: 500px;
  position: relative;
  text-align: center;
  padding-bottom: 40px;
`;

export const TableHeader = styled.thead`
  background: ${DefaultColors.backgroundApplication};

  tr {
    color: ${DefaultColors.lightGreyBlue};

    th {
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      padding: 10px;
    }
  }
`;

export const TableBody = styled.tbody`
  tr {
    &:nth-child(2n) {
      background: ${DefaultColors.backgroundApplication};
    }

    td {
      padding: 10px 0;
    }
  }
`;
