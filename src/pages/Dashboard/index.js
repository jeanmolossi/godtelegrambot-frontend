import React from 'react';

import { FiMoreVertical } from 'react-icons/fi';

import CardLayout from '../_layouts/CardLayout';

import TableComponent from '~/components/Table';
import BarChart from '~/components/BarChart';

import { Container, MoreActionsTable, IconBox } from './styles';

export default function Dashboard() {
  const mainLabel = ['Novos Usuários', 'Outros Usuários'];
  const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
  const data = {
    labels,
    datasets: [
      {
        label: mainLabel[0],
        backgroundColor: '#FB6340',
        borderColor: '#FB6340',
        borderWidth: 1,
        hoverBackgroundColor: '#F53C56',
        hoverBorderColor: '#FB6340',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: mainLabel[1],
        backgroundColor: '#FEB969',
        borderColor: '#FEB969',
        borderWidth: 1,
        hoverBackgroundColor: '#F53C56',
        hoverBorderColor: '#FEB969',
        data: [81, 56, 55, 40, 65, 59, 80],
      },
    ],
  };
  return (
    <>
      <Container>
        <CardLayout>
          <h1>Dashboard</h1>

          <TableComponent headers={['Usuarios', 'Grupos', 'Compras', 'Ações']}>
            <tr>
              <td>Josivaldo</td>
              <td>7</td>
              <td>2</td>
              <td>
                <MoreActionsTable>
                  <IconBox href="#/">
                    <FiMoreVertical size={24} />
                  </IconBox>
                </MoreActionsTable>
              </td>
            </tr>
          </TableComponent>
        </CardLayout>

        <CardLayout>
          <h1>
            Vendas mensais <small>Parceiros</small>
          </h1>

          <BarChart mainLabel={mainLabel} labels={labels} datasets={data} />
        </CardLayout>
      </Container>
    </>
  );
}
