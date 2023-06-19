import React, { useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {

  const {
    state,
    choosePhotoSelected,
    toggleFavPhotoIds,
    toggleModal
  } = useApplicationData();
  
  return (
  <div className="App">
    <HomeRoute
    actions={state.ACTIONS} 
    toggleModal={toggleModal}
    choosePhotoSelected={choosePhotoSelected}
    toggleFavPhotoIds={toggleFavPhotoIds}
    favPhotoIds={state.favPhotoIds}
    />
    {state.openModal && <PhotoDetailsModal 
    actions={state.ACTIONS}
    favPhotoIds={state.favPhotoIds}
    toggleFavPhotoIds={toggleFavPhotoIds}
    photo={state.photoSelected}
    toggleModal={toggleModal}
    />}
  </div>
  );
}

export default App;