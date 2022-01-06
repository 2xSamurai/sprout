import types from './types';

const initialState = {
  onboarding: {
    step: 1,
    status: true,
    total: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ONBOARDING:
      return {
        ...state,
        onboarding: {
          step: action.data.step ? action.data.step : state.onboarding.step,
          status: action.data.status !== '' ? action.data.status : state.onboarding.status,
          total: action.data.total ? action.data.total : state.onboarding.total, 
        },
      };
    default:
      return state;
  }
};

export default reducer;
