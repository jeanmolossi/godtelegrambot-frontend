import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { syncSuccess, syncFailure } from './actions';

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

export default all([takeLatest('@product/SYNC_REQUEST', syncResquest)]);
