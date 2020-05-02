import React, { useState, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Form } from '@rocketseat/unform';
import { useParams } from 'react-router-dom';
import {
  FiShoppingBag,
  FiHash,
  FiCheckCircle,
  FiRefreshCw,
} from 'react-icons/fi';

import api from '~/services/api';

import CardLayout from '../_layouts/CardLayout';

import InputController from '~/components/InputController';
import InputControllerButton from '~/components/InputControllerButton';

import { Container } from './styles';

export default function ProductOptions() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});

  const loadProductInfo = useCallback(async productId => {
    setLoading(true);
    const response = await api.get(`product/${productId}`);
    setProduct({
      ...response.data,
      produtoAtivo: response.data.productActive
        ? 'Produto ativo'
        : 'Produto desativado',
      produtoMonetizze: response.data.productMonetizze
        ? 'Produto sincronizado com Monetizze'
        : 'Produto sincronizado Manualmente',
    });
    console.tron.log(response.data);
    setLoading(false);
  }, []);

  const handleSubmit = useCallback(data => {
    toast.success('Atualizado com sucesso!');
  }, []);

  useEffect(() => {
    loadProductInfo(id);
  }, [loadProductInfo, id]);

  return (
    <Container>
      <CardLayout loading={loading}>
        <h1>
          Produto <small>Mais opções</small>
        </h1>

        <Form initialData={product} onSubmit={handleSubmit}>
          <InputController
            icon={FiShoppingBag}
            name="productName"
            type="text"
            placeholder="Título / Nome do produto"
          />

          <InputController
            icon={FiHash}
            name="productId"
            type="number"
            placeholder="Código do produto"
            disabled
          />

          <InputController
            icon={FiCheckCircle}
            name="produtoAtivo"
            type="text"
            placeholder="Código do produto"
            disabled
          />

          <InputController
            icon={FiRefreshCw}
            name="produtoMonetizze"
            type="text"
            placeholder="Tipo de sincronismo de produto"
            disabled
          />

          <InputControllerButton type="submit">Salvar</InputControllerButton>
        </Form>
      </CardLayout>
    </Container>
  );
}
