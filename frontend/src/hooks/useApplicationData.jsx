import { React, useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_TOGGLE: 'FAV_PHOTO_TOGGLE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  SELECT_SIMILAR_PHOTOS: 'SELECT_SIMILAR_PHOTOS'
};

const initialState = {
  photoSelected: {},
  openModal: false,
  favPhotoIds: [],
  similarPhotos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'FAV_PHOTO_TOGGLE':
      const id = Object.values(action.id);
      if (state.favPhotoIds.indexOf(id[0]) !== -1) {
        const filtered = state.favPhotoIds.filter((favPhotoId) => favPhotoId !== id[0]);
        return { ...state, favPhotoIds: filtered };
      }
      return { ...state, favPhotoIds: [...state.favPhotoIds, id[0]] };
    case 'SELECT_PHOTO':
      return { ...state, photoSelected: action.array.find((photo) => (photo.id === action.id)) };
    case 'SELECT_SIMILAR_PHOTOS':
      return {...state, similarPhotos: action.array}
    case 'TOGGLE_MODAL':
      return { ...state, openModal: !state.openModal };
    default:
      return state;
  }
}

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleModal = () => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL });
  };

  const choosePhotoSelected = (id, array) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, id: id, array: array });
  };

  const setSimilarPhotos = (array) => {
    dispatch({type: ACTIONS.SELECT_SIMILAR_PHOTOS, array: array})
  }

  const toggleFavPhotoIds = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_TOGGLE, id: id });
  };

  return {
    state,
    choosePhotoSelected,
    setSimilarPhotos,
    toggleFavPhotoIds,
    toggleModal,
  };
};

export default useApplicationData;