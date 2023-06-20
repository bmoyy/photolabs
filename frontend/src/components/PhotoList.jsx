import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const { actions, favPhotoIds, toggleFavPhotoIds, toggleModal, choosePhotoSelected,setFav } = props;

  const clickPhoto = (id) => {
    choosePhotoSelected({type: actions.SELECT_PHOTO, array: props.photos, id: id});
    toggleModal({type: actions.TOGGLE_MODAL});
  }

  const photoList = props.photos.map((photo) => (
  <PhotoListItem 
  favPhotoIds={favPhotoIds} 
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