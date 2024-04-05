import React, { useEffect, useState } from 'react';
import './Recommended.css';
// import thumbnail1 from '../../assets/thumbnail1.png';
// import thumbnail2 from '../../assets/thumbnail2.png';
// import thumbnail3 from '../../assets/thumbnail3.png';
// import thumbnail4 from '../../assets/thumbnail4.png';
// import thumbnail5 from '../../assets/thumbnail5.png';
// import thumbnail6 from '../../assets/thumbnail6.png';
// import thumbnail7 from '../../assets/thumbnail7.png';
// import thumbnail8 from '../../assets/thumbnail8.png';
import { API_KEY, value_converter } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {

 const [apiData, setApiData] = useState([]);

 const fetchData = async () => {
  const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

  await fetch(relatedVideo_url).then(res => res.json()).then(data => setApiData(data.items))
 }

 useEffect(() => {
  fetchData();
 }, [])

 return (
  <>
   {
    apiData.map((item, index) => {
     return <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="row mb-2 text-decoration-none text-dark">
      <div className="col-6 p-0">
       <img src={item.snippet.thumbnails.medium.url} className='img-fluid' alt="" />
      </div>
      <div className="col-6">
       <h6>{item.snippet.title}</h6>
       <h6 className='mb-0 fw-normal'>{item.snippet.channelTitle}</h6>
       <p className='text-muted'>{value_converter(item.statistics.viewCount)} Views</p>
      </div>
     </Link>
    })
   }
   {/* <div className="row">
    <div className="col-6 p-0">
     <img src={thumbnail1} className='img-fluid' alt="" />
    </div>
    <div className="col-6">
     <h6>Best Channel to Learn Web Development from</h6>
     <h6 className='mb-0 fw-normal'>Great Stack</h6>
     <p className='text-muted'>199k Views</p>
    </div>
   </div> */}
   {/* <div className="row mt-2">
    <div className="col-6 p-0">
     <img src={thumbnail2} className='img-fluid' alt="" />
    </div>
    <div className="col-6">
     <h6>Best Channel to Learn Web Development from</h6>
     <h6 className='mb-0 fw-normal'>Great Stack</h6>
     <p className='text-muted'>199k Views</p>
    </div>
   </div>
   <div className="row mt-2">
    <div className="col-6 p-0">
     <img src={thumbnail3} className='img-fluid' alt="" />
    </div>
    <div className="col-6">
     <h6>Best Channel to Learn Web Development from</h6>
     <h6 className='mb-0 fw-normal'>Great Stack</h6>
     <p className='text-muted'>199k Views</p>
    </div>
   </div>
   <div className="row mt-2">
    <div className="col-6 p-0">
     <img src={thumbnail4} className='img-fluid' alt="" />
    </div>
    <div className="col-6">
     <h6>Best Channel to Learn Web Development from</h6>
     <h6 className='mb-0 fw-normal'>Great Stack</h6>
     <p className='text-muted'>199k Views</p>
    </div>
   </div>
   <div className="row mt-2">
    <div className="col-6 p-0">
     <img src={thumbnail5} className='img-fluid' alt="" />
    </div>
    <div className="col-6">
     <h6>Best Channel to Learn Web Development from</h6>
     <h6 className='mb-0 fw-normal'>Great Stack</h6>
     <p className='text-muted'>199k Views</p>
    </div>
   </div>
   <div className="row mt-2">
    <div className="col-6 p-0">
     <img src={thumbnail6} className='img-fluid' alt="" />
    </div>
    <div className="col-6">
     <h6>Best Channel to Learn Web Development from</h6>
     <h6 className='mb-0 fw-normal'>Great Stack</h6>
     <p className='text-muted'>199k Views</p>
    </div>
   </div>
   <div className="row mt-2">
    <div className="col-6 p-0">
     <img src={thumbnail7} className='img-fluid' alt="" />
    </div>
    <div className="col-6">
     <h6>Best Channel to Learn Web Development from</h6>
     <h6 className='mb-0 fw-normal'>Great Stack</h6>
     <p className='text-muted'>199k Views</p>
    </div>
   </div>
   <div className="row mt-2">
    <div className="col-6 p-0">
     <img src={thumbnail8} className='img-fluid' alt="" />
    </div>
    <div className="col-6">
     <h6>Best Channel to Learn Web Development from</h6>
     <h6 className='mb-0 fw-normal'>Great Stack</h6>
     <p className='text-muted'>199k Views</p>
    </div>
   </div> */}
  </>
 )
}

export default Recommended