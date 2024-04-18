import React, { useState, useEffect } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import thumbnail1 from '../../assets/thumbnail1.png';
// import thumbnail2 from '../../assets/thumbnail2.png';
// import thumbnail3 from '../../assets/thumbnail3.png';
// import thumbnail4 from '../../assets/thumbnail4.png';
// import thumbnail5 from '../../assets/thumbnail5.png';
// import thumbnail6 from '../../assets/thumbnail6.png';
// import thumbnail7 from '../../assets/thumbnail7.png';
// import thumbnail8 from '../../assets/thumbnail8.png';
import { API_KEY } from '../../data';
import { value_converter } from '../../data';
import moment from 'moment';


const Feed = ({ category }) => {

 const [data, setData] = useState([]);

 const fetchData = async () => {
  const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
  await fetch(videoList_url).then(response => response.json().then(data => setData(data.items))

  )
 }

 useEffect(() => {
  fetchData();
 }, [category]);


 return (
  <>
   <div className="row">
    {data.map((item, index) => {
     return <div className="col-sm-6 col-lg-3 feed-card">
      <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className='text-decoration-none text-dark'>
       <img src={item.snippet.thumbnails.medium.url} className="img-fluid rounded" alt="" />
       <h6 className='mt-2'>{item.snippet.title}</h6>
       <h6 className='mb-0'>{item.snippet.channelTitle}</h6>
       <p className='text-muted views'>{value_converter(item.statistics.viewCount)} &bull; <span>{moment(item.snippet.publishedAt).fromNow()}</span></p>
      </Link>
     </div>
    })}

    {/* <div className="col-3">
            <div>
                <img src={thumbnail2} className="img-fluid rounded" alt="" />
                <h6 className='mt-2'>Best Platform to learn coding from</h6>
                <h6 className='mb-0'>Great Stack</h6>
                <p className='text-muted views'>15k views &bull; <span>2 days ago</span></p>
            </div>
        </div>
        <div className="col-3">
            <div>
                <img src={thumbnail3} className="img-fluid rounded" alt="" />
                <h6 className='mt-2'>Best Platform to learn coding from</h6>
                <h6 className='mb-0'>Great Stack</h6>
                <p className='text-muted views'>15k views &bull; <span>2 days ago</span></p>
            </div>
        </div>
        <div className="col-3">
            <div>
                <img src={thumbnail4} className="img-fluid rounded" alt="" />
                <h6 className='mt-2'>Best Platform to learn coding from</h6>
                <h6 className='mb-0'>Great Stack</h6>
                <p className='text-muted views'>15k views &bull; <span>2 days ago</span></p>
            </div>
        </div>
        <div className="col-3">
            <div>
                <img src={thumbnail5} className="img-fluid rounded" alt="" />
                <h6 className='mt-2'>Best Platform to learn coding from</h6>
                <h6 className='mb-0'>Great Stack</h6>
                <p className='text-muted views'>15k views &bull; <span>2 days ago</span></p>
            </div>
        </div>
        <div className="col-3">
            <div>
                <img src={thumbnail6} className="img-fluid rounded" alt="" />
                <h6 className='mt-2'>Best Platform to learn coding from</h6>
                <h6 className='mb-0'>Great Stack</h6>
                <p className='text-muted views'>15k views &bull; <span>2 days ago</span></p>
            </div>
        </div>
        <div className="col-3">
            <div>
                <img src={thumbnail7} className="img-fluid rounded" alt="" />
                <h6 className='mt-2'>Best Platform to learn coding from</h6>
                <h6 className='mb-0'>Great Stack</h6>
                <p className='text-muted views'>15k views &bull; <span>2 days ago</span></p>
            </div>
        </div>
        <div className="col-3">
            <div>
                <img src={thumbnail8} className="img-fluid rounded" alt="" />
                <h6 className='mt-2'>Best Platform to learn coding from</h6>
                <h6 className='mb-0'>Great Stack</h6>
                <p className='text-muted views'>15k views &bull; <span>2 days ago</span></p>
            </div>
        </div>
        <div className="col-3">
            <div>
                <img src={thumbnail8} className="img-fluid rounded" alt="" />
                <h6 className='mt-2'>Best Platform to learn coding from</h6>
                <h6 className='mb-0'>Great Stack</h6>
                <p className='text-muted views'>15k views &bull; <span>2 days ago</span></p>
            </div>
        </div>
        <div className="col-3">
            <div>
                <img src={thumbnail8} className="img-fluid rounded" alt="" />
                <h6 className='mt-2'>Best Platform to learn coding from</h6>
                <h6 className='mb-0'>Great Stack</h6>
                <p className='text-muted views'>15k views &bull; <span>2 days ago</span></p>
            </div>
        </div> */}
   </div>
  </>
 )
}

export default Feed