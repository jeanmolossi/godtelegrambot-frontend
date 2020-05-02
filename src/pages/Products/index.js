import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { FiMoreVertical } from 'react-icons/fi';

import api from '~/services/api';

import CardLayout from '../_layouts/CardLayout';

import TableComponent from '~/components/Table';

import { Container } from './styles';

export default function Products() {
  const [products, setProducts] = useState([]);

  const loadProducts = useCallback(async () => {
    const response = await api.get(`products`);

    const data = response.data.map(p => {
      return {
        ...p,
        ativo: p.productActive ? 'Ativo' : 'Desativado',
        ativoColor: p.productActive ? '#2DCE98' : '#F53C56',
        sincronizado: p.productMonetizze ? 'Sincronizado' : 'Não sincronizado',
        sincronizadoColor: p.productMonetizze ? '#2DCE98' : '#F53C56',
        grupos: p.Groups.length,
        timeDistance: formatDistance(parseISO(p.createdAt), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
      };
    });

    setProducts(data);
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <Container>
      <CardLayout>
        <h1>
          Seus Produtos <small>Detalhes</small>
        </h1>

        <TableComponent
          headers={[
            'Título',
            'Identificador',
            'Ativo',
            'Sincronizado',
            'Grupos',
            'Adicionado',
            'Ações',
          ]}
        >
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.productName}</td>
              <td>{p.productId}</td>
              <td style={{ color: p.ativoColor }}>{p.ativo}</td>
              <td style={{ color: p.sincronizadoColor }}>{p.sincronizado}</td>
              <td>{p.grupos}</td>
              <td>{p.timeDistance}</td>
              <td>
                <Link to={`/product/${p.id}/options`}>
                  <FiMoreVertical size={24} />
                </Link>
              </td>
            </tr>
          ))}
        </TableComponent>
      </CardLayout>
    </Container>
  );
}
