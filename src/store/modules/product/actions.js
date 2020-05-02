export function syncRequest(groupPk, productPk, syncState) {
  return {
    type: '@product/SYNC_REQUEST',
    payload: { groupPk, productPk, syncState },
  };
}

export function syncSuccess() {
  return { type: '@product/SYNC_SUCCESS' };
}

export function syncFailure() {
  return { type: '@product/SYNC_FAILURE' };
}
