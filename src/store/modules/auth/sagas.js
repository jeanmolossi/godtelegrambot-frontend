import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { signInSuccess, signFailure } from './actions';

import history from '~/services/history';
import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.canLogin) {
      toast.error('Você não pode fazer login na aplicação');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (error) {
    yield put(signFailure());
    toast.error('Não foi possível acessar. Verifique seus dados.');
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, tgId } = payload;

    yield call(api.post, 'user', {
      name,
      email,
      password,
      tgId,
    });

    toast.success('Cadastrado com sucesso, aguarde sua aprovação e faça login');
    history.push('/');
  } catch (error) {
    yield put(signFailure());
    toast.error(
      'Não foi possível se cadastrar na aplicação. Verifique se seus dados estão preenchidos corretamente.'
    );
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  if (token) api.defaults.headers.Authorization = `Bearer ${token}`;
}

export function logOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/LOG_OUT', logOut),
]);
