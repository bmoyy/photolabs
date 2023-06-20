import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { setFav, isFav } = props;

  return (
    <div className="photo-list__fav-icon" onClick={setFav}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={isFav ? '#C80000' : '#EEEEEE'}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;