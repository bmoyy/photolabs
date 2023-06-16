import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';
import photos from '../mocks/photos';

const PhotoList = (props) => {

  const photoList =photos.map((photo) => (
  <PhotoListItem favPhotoIds={props.favPhotoIds} toggleFavLiked={props.toggleFavLiked} {...photo} key={photo.id}/>
  ));

  return (
  <ul className="photo-list">
    {photoList}
  </ul>
  );
}

export default PhotoList