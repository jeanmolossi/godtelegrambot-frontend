import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import {} from 'react-redux';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { saveConfigFailure, saveConfigSuccess } from './actions';

export function* saveConfig({ payload }) {
  try {
    const { consumerKey } = payload;
    const stateSelector = state => state.config;
    const issetConfig = yield select(stateSelector);

    let response = null;
    if (issetConfig && issetConfig !== undefined) {
      response = yield call(api.put, 'config', {
        consumerKey,
      });
    } else {
      response = yield call(api.post, 'config', {
        consumerKey,
      });
    }

    yield put(saveConfigSuccess(response.data.consumerKey));
    toast.success('Configurações de API salvas com sucesso!');
  } catch (error) {
    yield put(saveConfigFailure());

    toast.error(
      'Não foi possível alterar a configuração de API, verifique suas credenciais'
    );
  }
}

export function* loadConfig({ payload }) {
  const response = yield call(api.post, 'config/rehydrate', {
    email: payload.email,
  });

  if (response.status !== 200) return;
  const { consumerKey } = response.data.Config;

  yield put(saveConfigSuccess(consumerKey));
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', loadConfig),
  takeLatest('@config/SAVE_REQUEST', saveConfig),
]);
