import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

// Portraits Actions

export const fetchPortraits = () => (dispatch) => {
  dispatch(portraitsLoading(true));
  return fetch(baseUrl + 'photos')
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error('Error ' +
          response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errmess = new Error(error.message);
        throw errmess;
      })
      .then((response) => response.json())
      .then((response) => response.portraits)
      .then((portraits) => dispatch(addPortraits(portraits)))
      .catch((error) => dispatch(portraitsFailed(error.message)));
};

export const portraitsLoading = () => ({
  type: ActionTypes.PORTRAITS_LOADING,
});

export const portraitsFailed = (errmess) => ({
  type: ActionTypes.PORTRAITS_FAILED,
  payload: errmess,
});

export const addPortraits = (portraits) => ({
  type: ActionTypes.ADD_PORTRAITS,
  payload: portraits,
});

// Landscapes Actions

export const fetchLandscapes = () => (dispatch) => {
  dispatch(landscapesLoading(true));
  return fetch(baseUrl + 'photos')
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error('Error ' +
          response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errmess = new Error(error.message);
        throw errmess;
      })
      .then((response) => response.json())
      .then((response) => response.landscapes)
      .then((landscapes) => dispatch(addLandscapes(landscapes)))
      .catch((error) => dispatch(landscapesFailed(error.message)));
};

export const landscapesLoading = () => ({
  type: ActionTypes.LANDSCAPES_LOADING,
});

export const landscapesFailed = (errmess) => ({
  type: ActionTypes.LANDSCAPES_FAILED,
  payload: errmess,
});

export const addLandscapes = (landscapes) => ({
  type: ActionTypes.ADD_LANDSCAPES,
  payload: landscapes,
});

// Wildlife Actions

export const fetchWildlife = () => (dispatch) => {
  dispatch(wildlifeLoading(true));
  return fetch(baseUrl + 'photos')
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error('Error ' +
          response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errmess = new Error(error.message);
        throw errmess;
      })
      .then((response) => response.json())
      .then((response) => response.wildlife)
      .then((wildlife) => dispatch(addWildlife(wildlife)))
      .catch((error) => dispatch(wildlifeFailed(error.message)));
};

export const wildlifeLoading = () => ({
  type: ActionTypes.WILDLIFE_LOADING,
});

export const wildlifeFailed = (errmess) => ({
  type: ActionTypes.WILDLIFE_FAILED,
  payload: errmess,
});

export const addWildlife = (wildlife) => ({
  type: ActionTypes.ADD_WILDLIFE,
  payload: wildlife,
});

// Items Actions

export const fetchItems = () => (dispatch) => {
  dispatch(itemsLoading(true));
  return fetch(baseUrl + 'items')
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error('Error ' +
          response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errmess = new Error(error.message);
        throw errmess;
      })
      .then((response) => response.json())
      .then((items) => dispatch(addItems(items)))
      .catch((error) => dispatch(itemsFailed(error.message)));
};

export const itemsLoading = () => ({
  type: ActionTypes.ITEMS_LOADING,
});

export const itemsFailed = (errmess) => ({
  type: ActionTypes.ITEMS_FAILED,
  payload: errmess,
});

export const addItems = (items) => ({
  type: ActionTypes.ADD_ITEMS,
  payload: items,
});

// Message Form Action

export const postMessage= (
    firstname,
    lastname,
    telnum,
    email,
    agree,
    contactType,
    message) => (dispatch) => {
  const newMessage = {
    firstname: firstname,
    lastname: lastname,
    telnum: telnum,
    email: email,
    agree: agree,
    contactType: contactType,
    message: message,
  };

  return fetch(baseUrl + 'message', {
    method: 'POST',
    body: JSON.stringify(newMessage),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error('Error ' +
          response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errmess = new Error(error.message);
        throw errmess;
      })
      .then((response) => response.json())
      .then((response) => dispatch(addMessage(response)))
      .then(alert('Thank you for your feedback!'))
      .catch((error) => {
        console.log('Post Message', error.message);
        alert('Your Message could not be posted\nError: ' + error.message); });
};

export const addMessage = (message) => ({
  type: ActionTypes.ADD_MESSAGE,
  payload: message,
});
