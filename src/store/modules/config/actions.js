export function saveConfigRequest(consumerKey) {
  return {
    type: '@config/SAVE_REQUEST',
    payload: { consumerKey },
  };
}

export function saveConfigSuccess(consumerKey) {
  return {
    type: '@config/SAVE_SUCCESS',
    payload: { consumerKey },
  };
}

export function saveConfigFailure() {
  return {
    type: '@config/SAVE_FAILURE',
  };
}
