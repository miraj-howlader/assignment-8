import Banner from '@/components/Banner'
import FeturedTiles from '@/components/FeturedTiles'
import Marquee from '@/components/Marquee'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Marquee/>
      <FeturedTiles/>
    </div>
  )
}

export default Home