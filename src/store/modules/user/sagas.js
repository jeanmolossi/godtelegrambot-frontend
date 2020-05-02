import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import {
  updateFailure,
  updateProfileSuccess,
  deactivateAccountSuccess,
  deactivateFailure,
} from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, oldPassword, password, confirmPassword } = payload;

    const response = yield call(api.put, 'user', {
      name,
      email,
      oldPassword,
      password,
      confirmPassword,
    });

    toast.success('Dados atualizados com sucesso!');
    yield put(updateProfileSuccess(response.data));
    history.push('/profile');
  } catch (error) {
    toast.error(`Não foi possível atualizar seu perfil ${error}`);
    yield put(updateFailure());
  }
}

export function* deactivateRequest({ payload }) {
  try {
    const { oldPassword } = payload;

    yield call(api.put, 'user/deactivate', { oldPassword });

    yield put(deactivateAccountSuccess());
    history.push('/');
  } catch (error) {
    toast.error('Você não pode desativar a conta');
    yield put(deactivateFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/DEACTIVATE_ACCOUNT_REQUEST', deactivateRequest),
]);
