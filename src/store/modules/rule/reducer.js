import { produce } from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function rule(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@rule/CHANGE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@rule/CHANGE_SUCCESS':
      case '@rule/CHANGE_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
