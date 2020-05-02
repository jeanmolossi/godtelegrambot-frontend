import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { changeRuleSuccess, changeRuleFailure } from './actions';

export function* changeRule({ payload }) {
  try {
    const { ruleId, ruleStats, groupTgId } = payload;
    console.tron.log(payload);
    yield call(api.put, `grouprule/update`, {
      ruleId,
      ruleStats,
      groupTgId,
    });

    toast.success('Atualizada com sucesso...');
    yield put(changeRuleSuccess());
  } catch (error) {
    toast.error('Não foi possível atualizar a regra no grupo');
    yield put(changeRuleFailure());
  }
}

export default all([takeLatest('@rule/CHANGE_REQUEST', changeRule)]);
