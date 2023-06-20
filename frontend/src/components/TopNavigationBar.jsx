import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} photos={props.photos} setPhotos={props.setPhotos}/>
      <FavBadge favPhotoIds={props.favPhotoIds}/>
    </div>
  )
}

export default TopNavigation;