import * as ActionTypes from './ActionTypes';

export const Wildlife = (state = {
  isLoading: true,
  errMess: null,
  wildlife: []}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_WILDLIFE:
      return {...state, isLoading: false,
        errMess: null,
        wildlife: action.payload};

    case ActionTypes.WILDLIFE_LOADING:
      return {...state, isLoading: true,
        errMess: null,
        wildlife: []};

    case ActionTypes.WILDLIFE_FAILED:
      return {...state, isLoading: false,
        errMess: action.payload,
        wildlife: []};

    default:
      return state;
  }
};
