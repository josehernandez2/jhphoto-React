import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Portraits} from './portraits';
import {Landscapes} from './landscapes';
import {Wildlife} from './wildlife';
import {Items} from './items';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form';
import {InitialFeedback} from './forms';

export const ConfigureStore = () => {
  const store = createStore(
      combineReducers({
        portraits: Portraits,
        landscapes: Landscapes,
        wildlife: Wildlife,
        items: Items,
        ...createForms({
          feedback: InitialFeedback,
        }),
      }),
      applyMiddleware(thunk, logger),
  );
  return store;
};
