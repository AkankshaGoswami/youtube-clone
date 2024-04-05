import React, { useState } from 'react'
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';

const Home = ({ sidebar }) => {

  const [category, setCategory] = useState(0);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className={`${sidebar?"col-2":"col-1"}`}>
            <Sidebar sidebar={sidebar} category={category}
            setCategory={setCategory}/>
          </div>
          <div className={`bg-light p-4 ${sidebar ? "col-10" : "col-11"}`}>
              <Feed category={category}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home