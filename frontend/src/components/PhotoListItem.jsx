
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const {favPhotoIds, toggleFavLiked, id} = props;
  const isLiked = favPhotoIds.indexOf(id) > -1;

  return (
    <li className="photo-list__item">
      <h1>{props.id}</h1>
      <PhotoFavButton liked={isLiked} toggleFavLiked={toggleFavLiked} id={id}/>
      <img className="photo-list__image" src={props.urls.regular} alt="Photograph"/>
      <section className='photo-list__user-details'>
        <span className='photo-list__user-info'>{props.user.username}</span>
        <img className='photo-list__user-profile' src={props.user.profile}/>
      </section>
      <span className='photo-list__user-location'>{props.location.city}, {props.location.country}</span>
    </li>
  )
}
  
PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
}

export default PhotoListItem