
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const {favPhotoIds, toggleFavLiked, id, showModal, setshowModal, modalData, setmodalData} = props;
  const isLiked = favPhotoIds.indexOf(id) > -1;

  const handleClick = () => {
    return (setshowModal(!showModal), 
    setmodalData({
      id: id,
      image: props.urls.regular,
      user: {username: props.user.username,
              profile: props.user.profile},
      location: {city: props.location.city,
                country: props.location.country},
      similar_photos: props.similar_photos
      }));
  };

  
  return (
    <li className="photo-list__item" >
      <PhotoFavButton liked={isLiked} toggleFavLiked={toggleFavLiked} id={id}/>
      <img className="photo-list__image" src={props.urls.regular} alt="Photograph" onClick={handleClick}/>
      <section className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={props.user.profile}/>
        <div className='photo-list__user-info'>
        <span>{props.user.username}</span>
        <span className='photo-list__user-location'>{props.location.city}, {props.location.country}</span>
        </div>
      </section>
    </li>
  )
}
  
export default PhotoListItem