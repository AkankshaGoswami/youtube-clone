import React from 'react'
import './Video.css';
import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommended from '../../Components/Recommended/Recommended';
import { useParams } from 'react-router-dom';

const Video = () => {

  const { videoId, categoryId } = useParams();

  return (
    <div className="container-fluid mt-4 bg-light">
      <div className="row">
        <PlayVideo videoId={videoId}/>
        <div className="col-sm-12 col-md-4">
          <Recommended categoryId={categoryId}/>
        </div>
      </div>
    </div>
    
  )
}

export default Video