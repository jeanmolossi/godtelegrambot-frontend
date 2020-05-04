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

export function updateRequest(productPk, productName) {
  return {
    type: '@product/UPDATE_REQUEST',
    payload: { productPk, productName },
  };
}

export function updateSuccess() {
  return { type: '@product/UPDATE_SUCCESS' };
}

export function updateFailure() {
  return { type: '@product/UPDATE_FAILURE' };
}
