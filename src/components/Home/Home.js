import React from 'react';
import Cards from '../UI/Cards';
import '../../App.css';
import './Home.css';

function Home() {
  return (
    <>
      <div className='home-container'>
      <h1>Welcome to my page</h1>
      <Cards />
    </div>
    </>
  )
}

export default Home;
