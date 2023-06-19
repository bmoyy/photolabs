import { React, useState} from "react";

const useAppicationData = () => {

  const [favPhotoIds,setfavPhotoIds] = useState([]);

  
  const [showModal, setshowModal] = useState(false);
  const [modalData, setmodalData] = useState({});
  
  
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

  const state = {
    showModal,
    favPhotoIds,
    modalData,
  };

  return {
    state,
    toggleFavLiked,
    setshowModal,
    setmodalData
  };
};

export default useAppicationData;