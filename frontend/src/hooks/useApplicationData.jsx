import { React, useState} from "react";

export default function Application(props) {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();


  return (
    <App/>
  );
}