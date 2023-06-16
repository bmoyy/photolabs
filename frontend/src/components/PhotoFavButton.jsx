import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { liked, toggleFavLiked, id } = props;
  const handleClick = () => toggleFavLiked(id);

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={liked ? '#C80000' : '#EEEEEE'}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;