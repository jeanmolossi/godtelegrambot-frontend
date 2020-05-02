import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import rule from './rule/reducer';
import product from './product/reducer';
import config from './config/reducer';

export default combineReducers({
  auth,
  user,
  rule,
  product,
  config,
});
