export function changeRuleRequest(ruleId, ruleStats, groupTgId) {
  return {
    type: '@rule/CHANGE_REQUEST',
    payload: {
      ruleId,
      ruleStats,
      groupTgId,
    },
  };
}

export function changeRuleSuccess() {
  return {
    type: '@rule/CHANGE_SUCCESS',
  };
}
export function changeRuleFailure() {
  return {
    type: '@rule/CHANGE_FAILURE',
  };
}
