import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {

  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios.get('/api/photos')
      .then(res=> setPhotos(res.data))
  },[]);

  useEffect(() => {
    axios.get('/api/topics')
      .then(res=> setTopics(res.data))
  },[]);

  const {
    state,
    choosePhotoSelected,
    toggleFavPhotoIds,
    toggleModal
  } = useApplicationData();

  const setFav = (id) => {
    toggleFavPhotoIds({ type: state.ACTIONS.FAV_PHOTO_TOGGLE, id: id });
  };

  return (
    <div className="App">
      <HomeRoute
        actions={state.ACTIONS}
        photos={photos}
        setPhotos={setPhotos}
        topics={topics}
        toggleModal={toggleModal}
        choosePhotoSelected={choosePhotoSelected}
        favPhotoIds={state.favPhotoIds}
        setFav={setFav}
      />
      {state.openModal &&
        <PhotoDetailsModal
          actions={state.ACTIONS}
          favPhotoIds={state.favPhotoIds}
          photo={state.photoSelected}
          toggleModal={toggleModal}
          setFav={setFav}
        />
      }
    </div>
  );
};

export default App;