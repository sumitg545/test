import React, { useEffect, useState } from 'react'
import { resourceLimits } from 'worker_threads';
import ContentSection from '../components/ContentSection';
import Header from '../components/Header'
import SidebarNav from '../components/Sidebar';
import '../scss/Home.scss'
import '../scss/Sidebar.scss'
  
function Home() {
  const [number, setNumber]=useState(0);
  return (
    <>
      <Header/>
      <SidebarNav/>
      <ContentSection/>
    </>
  )
}

export default Home