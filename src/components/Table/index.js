import React from 'react';
import propTypes from 'prop-types';

import {
  TableBox,
  TableOverflow,
  UsersTable,
  TableHeader,
  TableBody,
} from './styles';

export default function TableComponent({ headers, children }) {
  return (
    <TableBox>
      <TableOverflow>
        <UsersTable cellSpacing="0">
          <TableHeader>
            <tr>
              {headers.map(head => (
                <th key={head}>{head}</th>
              ))}
            </tr>
          </TableHeader>
          <TableBody>{children}</TableBody>
        </UsersTable>
      </TableOverflow>
    </TableBox>
  );
}

TableComponent.propTypes = {
  headers: propTypes.arrayOf(propTypes.string).isRequired,
  children: propTypes.oneOfType([propTypes.element, propTypes.array])
    .isRequired,
};
