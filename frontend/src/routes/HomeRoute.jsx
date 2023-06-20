import {React} from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation favPhotoIds={props.favPhotoIds} topics={props.topics} photos={props.photos} setPhotos={props.setPhotos}/>
      <PhotoList 
      photos={props.photos}
      actions={props.actions}
      favPhotoIds={props.favPhotoIds}
      toggleFavPhotoIds={props.toggleFavPhotoIds}
      toggleModal={props.toggleModal}
      choosePhotoSelected={props.choosePhotoSelected}
      setFav={props.setFav}
      />
    </div>
  )
}

export default HomeRoute;