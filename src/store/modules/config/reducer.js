import { produce } from 'immer';

const INITIAL_STATE = {
  loading: false,
  config: null,
};

export default function config(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@config/SAVE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@config/SAVE_SUCCESS': {
        draft.config = action.payload.consumerKey;
        draft.loading = false;
        break;
      }
      case '@config/SAVE_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/LOG_OUT': {
        draft.config = null;
        break;
      }
      default:
    }
  });
}
