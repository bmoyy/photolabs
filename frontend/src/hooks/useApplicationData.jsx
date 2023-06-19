import { React, useState } from "react";

const useApplicationData = () => {

  // const [favPhotoIds,setfavPhotoIds] = useState([]);


  // const [showModal, setshowModal] = useState(false);
  // const [modalData, setmodalData] = useState({});


  // const toggleFavLiked = (photoid) => {
  //   const photoIdIndex = favPhotoIds.indexOf(photoid);
  //   if (photoIdIndex === -1) {
  //     setfavPhotoIds([...favPhotoIds, photoid])
  //   } else {
  //     const removedFavPhotoIds = [...favPhotoIds];
  //     removedFavPhotoIds.splice(photoIdIndex,1);
  //     setfavPhotoIds(removedFavPhotoIds);
  //   }
  // }

  const ACTIONS = {
    FAV_PHOTO_TOGGLE: 'FAV_PHOTO_TOGGLE',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    TOGGLE_MODAL: 'TOGGLE_MODAL'
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'FAV_PHOTO_TOGGLE':
        if (state.includes(action.id)) {
          const filtered = state.filter((favPhotoId) => favPhotoId !== action.id);
          return filtered;
        }
        return [...state, action.id];
      case 'SET_PHOTO_DATA':
        return action.data;
      case 'SELECT_PHOTO':
        return action.array.find((photo) => (photo.id === action.id));
      case 'TOGGLE_MODAL':
        return !state;
      default:
        return state;
    }
  }

  const [favPhotoIds, toggleFavPhotoIds] = useReducer(reducer, []);
  const [photoSelected, choosePhotoSelected] = useReducer(reducer, {});
  const [openModal, toggleModal] = useReducer(reducer, false); 


  const state = {
    photoSelected,
    openModal,
    favPhotoIds,
  };

  return {
    state,
    choosePhotoSelected,
    toggleFavPhotoIds,
    toggleModal,
  };
};

export default useApplicationData;