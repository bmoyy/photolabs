import { React, useEffect } from 'react';

import '../styles/PhotoDetailsModal.scss';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import useApplicationData from '../hooks/useApplicationData';

export const PhotoDetailsModal = (props) => {
  const { actions, photo, openModal, toggleModal, favPhotoIds, setFav, choosePhotoSelected } = props;
  const { state, setSimilarPhotos } = useApplicationData();

  useEffect(()=> {
    setSimilarPhotos(Object.values(photo.similar_photos));
  },[])

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button' onClick={() => toggleModal()}>
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
        <PhotoFavButton setFav={()=>setFav(photo.id)} isFav={favPhotoIds.includes(photo.id)}/>
        <img className='photo-details-modal__image' src={photo.urls.full} alt="Photograph"/>
        <h1 className='photos-details-modal__header'>Similar Photos</h1>
        <PhotoList 
        actions={actions}
        favPhotoIds={favPhotoIds}
        setFav={setFav}
        photos={state.similarPhotos}
        choosePhotoSelected={choosePhotoSelected}
        openModal={openModal}
        toggleModal={toggleModal}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;