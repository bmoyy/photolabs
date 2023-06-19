import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {

  const photoList =props.photos.map((photo) => (
  <PhotoListItem 
  favPhotoIds={props.favPhotoIds} 
  toggleFavLiked={props.toggleFavLiked}
  showModal={props.showModal} 
  setshowModal={props.setshowModal} 
  modalData={props.modalData}
  setmodalData={props.setmodalData}
  {...photo} 
  key={photo.id}/>
  ));

  return (
  <ul className="photo-list">
    {photoList}
  </ul>
  );
}

export default PhotoList