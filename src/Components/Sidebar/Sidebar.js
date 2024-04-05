import React from 'react';
import './Sidebar.css';
import home from '../../assets/home.png';
import automobiles from '../../assets/automobiles.png';
import entertainment from '../../assets/entertainment.png';
import game_icon from '../../assets/game_icon.png';
import sports from '../../assets/sports.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';


const Sidebar = ({ sidebar, category, setCategory }) => {
    return (
        <>
            <div className={`${sidebar ? "" : "small-sidebar"}`}>
                <ul className='list-unstyled sidebar-list'>
                    <li onClick={()=>setCategory(0)} className={`sidelink ${category===0?'active':''}`}>
                        <img src={home}
                            className={`img-fluid me-3 ${sidebar ? "small-img" : "medium-img"}`}
                            alt="" />
                        <span className='fw-bold'>Home</span>
                    </li>
                    <li onClick={()=>setCategory(20)} className={`sidelink ${category===20?'active':''}`}>
                        <img src={game_icon} className={`img-fluid me-3 ${sidebar ? "small-img" : "medium-img"}`} alt="" />
                        <span className='fw-bold'>Gaming</span>
                    </li>
                    <li onClick={()=>setCategory(2)} className={`sidelink ${category===2?'active':''}`}>
                        <img src={automobiles} className={`img-fluid me-3 ${sidebar ? "small-img" : "medium-img"}`} alt="" />
                        <span className='fw-bold'>Automobiles</span>
                    </li>
                    <li onClick={()=>setCategory(24)} className={`sidelink ${category===24?'active':''}`}>
                        <img src={entertainment} className={`img-fluid me-3 ${sidebar ? "small-img" : "medium-img"}`} alt="" />
                        <span className='fw-bold'>Entertainment</span>
                    </li>
                    <li onClick={()=>setCategory(17)} className={`sidelink ${category===17?'active':''}`}>
                        <img src={sports} className={`img-fluid me-3 ${sidebar ? "small-img" : "medium-img"}`} alt="" />
                        <span className='fw-bold'>Sports</span>
                    </li>
                    <li onClick={()=>setCategory(28)} className={`sidelink ${category===28?'active':''}`}>
                        <img src={tech} className={`img-fluid me-3 ${sidebar ? "small-img" : "medium-img"}`} alt="" />
                        <span className='fw-bold'>Technology</span>
                    </li>
                    <li onClick={()=>setCategory(10)} className={`sidelink ${category===10?'active':''}`}>
                        <img src={music} className={`img-fluid me-3 ${sidebar ? "small-img" : "medium-img"}`} alt="" />
                        <span className='fw-bold'>Music</span>
                    </li>
                    <li onClick={()=>setCategory(22)} className={`sidelink ${category===22?'active':''}`}>
                        <img src={blogs} className={`img-fluid me-3 ${sidebar ? "small-img" : "medium-img"}`} alt="" />
                        <span className='fw-bold'>Blogs</span>
                    </li>
                    <li onClick={()=>setCategory(25)} className={`sidelink ${category===25?'active':''}`}>
                        <img src={news} className={`img-fluid me-3 ${sidebar ? "small-img" : "medium-img"}`} alt="" />
                        <span className='fw-bold'>News</span>
                    </li>
                    <hr />
                    <p className='fw-bold mb-0'>Subscribed</p>
                    <li>
                        <img src={jack} className={`img-fluid me-3 rounded-circle ${sidebar ? "small-img" : "medium-img"}`} alt="" />
                        <span className='fw-bold'>Jack</span>
                    </li>
                    <li>
                        <img src={simon} className={`img-fluid me-3 rounded-circle ${sidebar ? "small-img" : "medium-img"}`} alt="" />
                        <span className='fw-bold'>Simon</span>
                    </li>
                    <li>
                        <img src={tom} className={`img-fluid me-3 rounded-circle ${sidebar ? "small-img" : "medium-img"}`} alt="" />
                        <span className='fw-bold'>Tom</span>
                    </li>
                    <li>
                        <img src={megan} className={`img-fluid me-3 rounded-circle ${sidebar ? "small-img" : "medium-img"}`} alt="" />
                        <span className='fw-bold'>Megan</span>
                    </li>
                    <li>
                        <img src={cameron} className={`img-fluid me-3 rounded-circle ${sidebar ? "small-img" : "medium-img"}`} alt="" />
                        <span className='fw-bold'>Cameron</span>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Sidebar;