import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  syncSuccess,
  syncFailure,
  updateSuccess,
  updateFailure,
} from './actions';

export function* syncResquest({ payload }) {
  try {
    const { groupPk, productPk, syncState } = payload;

    yield call(api.put, 'productSync', {
      groupPk,
      productPk,
      sync: syncState,
    });

    yield put(syncSuccess());
    toast.success('Sincronização atualizada!');
  } catch (error) {
    yield put(syncFailure());
    toast.error('Não foi possível atualizar as informações de sincronização');
  }
}

export function* updateRequest({ payload }) {
  try {
    const { productPk, productName } = payload;
    console.tron.log(payload);
    yield call(api.put, `product/${productPk}`, {
      productName,
    });

    yield put(updateSuccess());
    toast.success('Produto atualizado com sucesso!');
  } catch (error) {
    yield put(updateFailure());
    toast.error('Não foi possível atualizar o produto');
  }
}

export default all([
  takeLatest('@product/SYNC_REQUEST', syncResquest),
  takeLatest('@product/UPDATE_REQUEST', updateRequest),
]);
