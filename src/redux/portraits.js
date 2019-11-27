import * as ActionTypes from './ActionTypes';

export const Portraits = (state = {
  isLoading: true,
  errMess: null,
  portraits: []}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PORTRAITS:
      return {...state, isLoading: false,
        errMess: null,
        portraits: action.payload};

    case ActionTypes.PORTRAITS_LOADING:
      return {...state, isLoading: true,
        errMess: null,
        portraits: []};

    case ActionTypes.PORTRAITS_FAILED:
      return {...state, isLoading: false,
        errMess: action.payload,
        portraits: []};

    default:
      return state;
  }
};
