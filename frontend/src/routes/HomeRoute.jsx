import {React, useState} from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import photos from '../mocks/photos';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation favPhotoIds={props.favPhotoIds}/>
      <PhotoList 
      photos={photos}
      favPhotoIds={props.favPhotoIds}
      toggleFavLiked={props.toggleFavLiked}
      showModal={props.showModal}
      setshowModal={props.setshowModal}
      modalData={props.modalData}
      setmodalData={props.setmodalData}
      />
    </div>
  )
}

export default HomeRoute;