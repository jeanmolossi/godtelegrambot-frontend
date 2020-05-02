export function updateProfileRequest(
  name,
  email,
  oldPassword,
  password,
  confirmPassword
) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: {
      name,
      email,
      oldPassword,
      password,
      confirmPassword,
    },
  };
}

export function updateProfileSuccess(user) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: {
      user,
    },
  };
}

export function updateFailure() {
  return {
    type: '@user/UPDATE_FAILURE',
  };
}

export function deactivateAccountRequest(oldPassword) {
  return {
    type: '@user/DEACTIVATE_ACCOUNT_REQUEST',
    payload: { oldPassword },
  };
}

export function deactivateAccountSuccess() {
  return {
    type: '@user/DEACTIVATE_ACCOUNT_SUCCESS',
  };
}

export function deactivateFailure() {
  return {
    type: '@user/DEACTIVATE_FAILURE',
  };
}
