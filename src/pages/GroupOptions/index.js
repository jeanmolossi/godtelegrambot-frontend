import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '~/services/api';

import ChangeRule from '~/components/ChangeRule';
import DefineProduct from '~/components/DefineProduct';

import { Container } from './styles';

export default function GroupOptions() {
  const { id } = useParams('id');

  const [userRole, setUserRole] = useState(1);
  const [loading, setLoading] = useState(true);

  const loadUserRole = useCallback(async groupTgId => {
    const response = await api.get(`groups`);
    const group = response.data.find(g => g.tgId === groupTgId);

    setUserRole(group.UserGroup.userRole);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadUserRole(id);
  }, [id, loadUserRole]);

  return (
    <Container>
      {userRole >= 6 && (
        <>
          <ChangeRule loading={loading} />
          <DefineProduct loading={loading} />
        </>
      )}
    </Container>
  );
}
