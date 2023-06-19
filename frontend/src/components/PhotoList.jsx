import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';
import photos from '../mocks/photos';

const PhotoList = (props) => {
  const { actions, favPhotoIds, toggleFavPhotoIds, toggleModal, choosePhotoSelected } = props;

  console.log(favPhotoIds);
  console.log(actions);
  const setFav = (id) => {
    toggleFavPhotoIds({type: actions.FAV_PHOTO_TOGGLE, id: id});
  }

  const clickPhoto = (id) => {
    choosePhotoSelected({type: actions.SELECT_PHOTO, array: photos, id: id});
    toggleModal({type: actions.TOGGLE_MODAL});
  }

  const photoList =props.photos.map((photo) => (
  <PhotoListItem 
  favPhotoIds={props.favPhotoIds} 
  {...photo} 
  key={photo.id}
  isFav={props.favPhotoIds.includes(photo.id)}
  setFav={()=> { setFav(photo.id) }}
  clickPhoto={() => { clickPhoto(photo.id) }}/>
  ));

  return (
  <ul className="photo-list">
    {photoList}
  </ul>
  );
}

export default PhotoList