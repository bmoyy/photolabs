
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { clickPhoto, setFav, isFav } = props;
  
  return (
    <li className="photo-list__item" >
      <PhotoFavButton setFav={setFav} isFav={isFav} />
      <img className="photo-list__image" src={props.urls.regular} alt="Photograph" onClick={clickPhoto}/>
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