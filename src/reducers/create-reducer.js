const createReducer = (initialState, handleActions) => (
  state = initialState,
  action,
) => {
  if (typeof initialState === 'undefined') {
    throw new Error('initial state should not be undefined');
  }

  if (typeof handleActions.hasOwnProperty === 'undefined') {
    throw new Error(
      'createReducer expects second arguments as an object representing reducer.',
    );
  }
  return handleActions.hasOwnProperty(action.type)
    ? handleActions[action.type](state, action)
    : state;
};

export { createReducer };
