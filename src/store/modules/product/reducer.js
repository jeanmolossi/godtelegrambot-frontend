import { produce } from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function product(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@product/UPDATE_REQUEST':
      case '@product/SYNC_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@product/UPDATE_SUCCESS':
      case '@product/UPDATE_FAILURE':
      case '@product/SYNC_SUCCESS':
      case '@product/SYNC_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
