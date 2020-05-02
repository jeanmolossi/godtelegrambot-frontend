import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMoreVertical } from 'react-icons/fi';

import CardLayout from '../_layouts/CardLayout';
import TableComponent from '~/components/Table';

import api from '~/services/api';

import { Container } from './styles';

export default function Groups() {
  const [groups, setGroups] = useState([]);

  const loadGroups = useCallback(async () => {
    const response = await api.get(`groups`);
    const roleArray = [
      'Usuário padrão',
      'Usuário livre',
      'Ajudante',
      'SubModerador',
      'Moderador',
      'Administrador',
      'CoFundador',
      'Fundador',
    ];
    setGroups(
      response.data.map(g => ({
        ...g,
        role: roleArray[g.UserGroup.userRole - 1],
        warns: g.UserGroup.warnsNumber,
        moreOptions: g.UserGroup.userRole >= 6,
      }))
    );
  }, []);

  useEffect(() => {
    loadGroups();
  }, [loadGroups]);

  return (
    <Container>
      <CardLayout>
        <TableComponent
          headers={['Grupo', 'Usuários', 'Alertas', 'Grau', 'Mais Opções']}
        >
          {groups.map(group => (
            <tr key={group.id}>
              <td>{group.name}</td>
              <td>{group.userCount}</td>
              <td>{group.warns} de 3</td>
              <td>{group.role}</td>
              <td>
                {group.moreOptions ? (
                  <Link to={`/group/${group.tgId}/options`}>
                    <FiMoreVertical /> Mais opções
                  </Link>
                ) : (
                  `Nada aqui`
                )}
              </td>
            </tr>
          ))}
        </TableComponent>
      </CardLayout>
    </Container>
  );
}
