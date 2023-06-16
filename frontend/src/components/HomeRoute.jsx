import {React, useState} from 'react';
import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';

const HomeRoute = () => {
  const [favPhotoIds,setfavPhotoIds] = useState([]);

  const toggleFavLiked = (photoid) => {
    const photoIdIndex = favPhotoIds.indexOf(photoid);
    if (photoIdIndex === -1) {
      setfavPhotoIds([...favPhotoIds, photoid])
    } else {
      const removedFavPhotoIds = [...favPhotoIds];
      removedFavPhotoIds.splice(photoIdIndex,1);
      setfavPhotoIds(removedFavPhotoIds);
    }
  }

  
  return (
    <div className="home-route">
      <TopNavigation favPhotoIds={favPhotoIds}/>
      <PhotoList favPhotoIds={favPhotoIds} toggleFavLiked={toggleFavLiked}/>
    </div>
  )
}

export default HomeRoute;