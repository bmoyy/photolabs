import {React} from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import photos from '../mocks/photos';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation favPhotoIds={props.favPhotoIds}/>
      <PhotoList 
      photos={photos}
      actions={props.actions}
      favPhotoIds={props.favPhotoIds}
      toggleFavPhotoIds={props.toggleFavPhotoIds}
      toggleModal={props.toggleModal}
      choosePhotoSelected={props.choosePhotoSelected}
      />
    </div>
  )
}

export default HomeRoute;