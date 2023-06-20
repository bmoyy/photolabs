import React from 'react';
import axios from 'axios';
import '../styles/TopicListItem.scss'

const TopicListItem = (props) => { 
  const {title, id, setPhotos} = props;

  const handleClick = () => {
    axios.get(`/api/topics/photos/${id}`)
    .then(res =>setPhotos(res.data));
  }

  return (
  <div className="topic-list__item">
    <span onClick={handleClick}>{title}</span>
  </div>
  );
}

export default TopicListItem