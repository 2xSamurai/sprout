import types from './types';

const setOnboarding = (currentStep, onboarding = '', totalSteps = '') => {
  return (dispatch, getState) => {
    dispatch({
      type: types.SET_ONBOARDING,
      data: { 
        step: currentStep,
        status: onboarding,
        total: totalSteps,
       },
    });
  };
}


export {
  setOnboarding,
};






/* Reference Redux Thunk Operation
*/

/*
const setOnboarding = () => {
  const pending = () => {
    return {
      type: types.GET_APPINIT,
      data: { pending: true },
    };
  }
  const success = (data) => {
    return {
      type: types.GET_APPINIT_SUCCESS,
      data: { pending: false },
    };
  }
  const fail = (data) => {
    return {
      type: types.GET_APPINIT_FAILURE,
      data: { pending: false },
    };
  }
  return (dispatch, getState) => {
    dispatch(pending());
    //start API Call

    //API Call success
    dispatch(success(response.data));
    //API Call failure
    dispatch(fail());
  };
};
*/