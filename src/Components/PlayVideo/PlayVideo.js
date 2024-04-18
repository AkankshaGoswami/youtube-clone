import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
// import video from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
// import jack from '../../assets/jack.png';
// import user_profile from '../../assets/user_profile.jpg';
import { API_KEY } from '../../data';
import { value_converter } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';


const PlayVideo = () => {

  const {videoId} = useParams();

 const [apiData, setApiData] = useState(null);
 const [channelData, setChannelData] = useState();
 const [commentData, setCommentData] = useState([]);


 const fetchVideoData = async () => {
  const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

  await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]))
 }

 const fetchOtherData = async () => {
  const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;

  await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]))

  const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;

  await fetch(comment_url).then(res => res.json()).then(data => setCommentData(data.items))
 }

 useEffect(() => {
  fetchVideoData();
 }, [videoId])

 useEffect(() => {
  fetchOtherData();
 }, [apiData])

 return (
  <>
   <div className="col-sm-12 col-md-8">
    {/* <video src={video} controls className='w-100' autoPlay muted></video> */}
    <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} className='w-100 play-video' title="Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2024" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    <h4>{apiData ? apiData.snippet.title : "Title Here"}</h4>
    <div className="row">
     <div className="col-4">
      <p className='text-muted mb-0'>{apiData ? value_converter(apiData.statistics.viewCount) : "16k"} views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}</p>
     </div>
     <div className="col-8 text-end">
      <img src={like} alt="" className='play-video-img' />
      <label className='align-middle me-3 ms-1 text-muted'>{apiData ? value_converter(apiData.statistics.likeCount) : "155"}</label>
      <img src={dislike} alt="" className='play-video-img' />
      <label className='align-middle me-3 ms-1 text-muted'>100</label>
      <img src={share} alt="" className='play-video-img' />
      <label className='align-middle me-3 ms-1 text-muted'>125</label>
      <img src={save} alt="" className='play-video-img' />
      <label className='align-middle ms-1 text-muted'>125</label>
     </div>
    </div>
    <hr />
    <div className="row d-flex align-items-center">
     <div className="col-1">
      <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} className='img-fluid w-100 rounded-circle' alt="" />
     </div>
     <div className="col-3">
      <h6 className='mb-0'>{apiData ? apiData.snippet.channelTitle : ''}</h6>
      <p className='text-muted mb-0'>{channelData ? value_converter(channelData.statistics.subscriberCount) : "1M"} Subscribers</p>
     </div>
     <div className="col-8 text-end">
      <button className="btn bg-danger text-white">Subscribe</button>
     </div>
     <div className="col-12 mt-3">
      <p className='mb-0'>{apiData ? apiData.snippet.description.slice(0, 250) : "Description Here"}</p>
      {/* <p>Subscribe Great Stack to follow more tutorials on Web Develepement</p> */}
      <hr className='mb-1' />
     </div>
    </div>
    <div className="row">
     <div className="col-12 mb-4">
      <h6>{apiData ? value_converter(apiData.statistics.commentCount) : ''} Comments</h6>
     </div>
     {commentData.map((item, index) => {
      return (
       <>
        <div className="col-1">
         <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} className='img-fluid rounded-circle' alt="" />
        </div>
        <div className="col-11 mb-4">
         <h6 className='mb-0'>{item.snippet.topLevelComment.snippet.authorDisplayName} <span className='text-muted fw-normal'>1 day ago</span></h6>
         <p className='mb-0'>{item.snippet.topLevelComment.snippet.textDisplay}</p>
         <img src={like} className='img-fluid description-img me-2 align-middle' alt="" />
         <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
         <img src={dislike} className='img-fluid description-img me-2 ms-3 align-middle' alt="" />
         <span>100</span>
        </div>
       </>
      )
     })}
    </div>
   </div >
  </>
 )
}

export default PlayVideo;