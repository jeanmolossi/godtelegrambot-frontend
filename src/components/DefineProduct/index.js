import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import api from '~/services/api';
import { syncRequest } from '~/store/modules/product/actions';

import CardLayout from '~/pages/_layouts/CardLayout';

import { Container, ProductInfo, SyncButton } from './styles';

export default function DefineProduct({ loading }) {
  const { id } = useParams();
  const loadingSync = useSelector(state => state.product.loading);
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  const loadProducts = useCallback(async tgId => {
    const response = await api.get(`products`);
    let groupPk = -1;
    const groupSelect = await api.get(`groups`);
    groupPk = groupSelect.data.find(g => g.tgId === tgId).id || -1;

    const data = response.data.map(p => {
      let isActiveHere = false;
      if (p.Groups.length > 0) {
        isActiveHere = !!p.Groups.find(g => g.tgId === tgId);
      }

      const timeDistance = formatDistance(parseISO(p.createdAt), new Date(), {
        addSuffix: true,
        locale: pt,
      });

      return {
        ...p,
        isActiveHere,
        groupPk,
        activeColor: p.productActive ? '#2DCE98' : '#F53C56',
        monetizzeColor: p.productMonetizze ? '#2DCE98' : '#F53C56',
        sincronizado: p.productMonetizze ? 'Sincronizado' : 'Não sincronizado',
        addedTime: timeDistance,
        textButton: isActiveHere
          ? 'Remover esta sincronização'
          : 'Sincronizar este produto',
      };
    });

    setProducts(data);
    console.tron.log(data);
  }, []);

  useEffect(() => {
    loadProducts(id);
  }, [id, loadProducts]);

  const handleSync = useCallback(
    (groupPk, productPk, sync) => {
      dispatch(syncRequest(groupPk, productPk, sync));

      const newProducts = products.map(p => {
        if (p.id === productPk) {
          const { isActiveHere } = p;
          return {
            ...p,
            isActiveHere: !isActiveHere,
            textButton: !isActiveHere
              ? 'Remover esta sincronização'
              : 'Sincronizar este produto',
          };
        }
        return p;
      });

      console.tron.log(products, newProducts);

      setProducts(newProducts);
    },
    [dispatch, products]
  );

  return (
    <Container>
      <CardLayout loading={loading}>
        <h1>
          Definir produto <small>Configurações</small>
        </h1>
        {products.map(product => (
          <ProductInfo active={product.isActiveHere}>
            <div>
              <h2>{product.productName}</h2>
              <span>Código: {product.productId}</span>
            </div>
            <p>
              <span>
                Produto <b style={{ color: product.activeColor }}>Ativo</b>
              </span>
              <span>
                <b style={{ color: product.monetizzeColor }}>
                  {product.sincronizado}
                </b>{' '}
                com Monetizze
              </span>
            </p>
            <div>
              <small>
                Adicionado {product.addedTime}
                <SyncButton
                  loadingState={loadingSync}
                  type="button"
                  onClick={() =>
                    handleSync(
                      product.groupPk,
                      product.id,
                      !product.isActiveHere
                    )
                  }
                >
                  {product.textButton}
                </SyncButton>
              </small>
            </div>
          </ProductInfo>
        ))}
      </CardLayout>
    </Container>
  );
}

DefineProduct.propTypes = {
  loading: propTypes.bool.isRequired,
};
