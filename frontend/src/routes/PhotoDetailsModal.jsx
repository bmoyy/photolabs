import { React, useState } from 'react';

import '../styles/PhotoDetailsModal.scss';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

export const PhotoDetailsModal = (props) => {
  const { photo , showModal, setshowModal, favPhotoIds, id } = props;
  const similarPhotos = Object.values(photo.similar_photos);
  const isLiked = favPhotoIds.indexOf(photo.id) > -1;
  console.log(isLiked);

  const handleClick = () => {
   return setshowModal(!showModal);
  };

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button' onClick={handleClick}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton liked={isLiked} toggleFavLiked={props.toggleFavLiked} id={photo.id}/>
        <img className='photo-details-modal__image' src={photo.image} alt="Photograph"/>
        <h1 className='photos-details-modal__header'>Similar Photos</h1>
        <PhotoList 
        photos={similarPhotos}
        favPhotoIds={props.favPhotoIds}
        toggleFavLiked={props.toggleFavLiked}
        showModal={props.showModal}
        setshowModal={props.setshowModal}
        modalData={props.modalData}
        setmodalData={props.setmodalData}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;