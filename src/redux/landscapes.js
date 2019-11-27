import * as ActionTypes from './ActionTypes';

export const Landscapes = (state = {
  isLoading: true,
  errMess: null,
  landscapes: []}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_LANDSCAPES:
      return {...state, isLoading: false,
        errMess: null,
        landscapes: action.payload};

    case ActionTypes.LANDSCAPES_LOADING:
      return {...state, isLoading: true,
        errMess: null,
        landscapes: []};

    case ActionTypes.LANDSCAPES_FAILED:
      return {...state, isLoading: false,
        errMess: action.payload,
        landscapes: []};

    default:
      return state;
  }
};
