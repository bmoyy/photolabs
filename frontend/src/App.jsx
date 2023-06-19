import React, { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';


const App = () => {

  const [showModal, setshowModal] = useState(false);
  const [modalData, setmodalData] = useState({});

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
  <div className="App">
    <HomeRoute 
    showModal={showModal}
    setshowModal={setshowModal}
    modalData={modalData}
    setmodalData={setmodalData}
    favPhotoIds={favPhotoIds}
    toggleFavLiked={toggleFavLiked}
    />
    {showModal && <PhotoDetailsModal 
    photo={modalData}
    favPhotoIds={favPhotoIds}
    toggleFavLiked={toggleFavLiked}
    showModal={showModal}
    setshowModal={setshowModal}
    modalData={modalData}
    setmodalData={setmodalData}
    />}
  </div>
  );
}

export default App;