import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import rule from './rule/sagas';
import product from './product/sagas';
import config from './config/sagas';

export default function* rootSaga() {
  return yield all([auth, user, rule, product, config]);
}
