import React, { useEffect, useState } from 'react'
import { resourceLimits } from 'worker_threads';
import Header from '../components/Header'
import '../scss/Home.scss'
import About from './About';
 
function Home() {
  const [number, setNumber]=useState(0);
  return (
    <>
      <Header/>
      
      <div className='home'>
          <p>Home Page : increment number </p>
          <h2>{number}</h2>
          <button className='btn btn-secondary' type='button' onClick={()=> (setNumber (number + 1))}>click</button>
      </div>
      <About/>
     
    </>
  )
}

export default Home