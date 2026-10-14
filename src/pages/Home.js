import React from 'react'
import Hero from "../components/Hero"
import HomeAbout from '../components/HomeAbout'
import BookNowBanner from '../components/BookNowBanner'
import HomeRooms from '../components/HomeRooms'
import Experience from '../components/Experience'
import HomeGallery from "../components/HomeGallery"
import Restorant from '../components/Restorant'
import Swimming from '../components/Swimming'

const Home = () => {
  return (
    <div>
            <Hero/>
            <HomeAbout/>
            <BookNowBanner/>
            <Restorant/>
            <HomeRooms/>
               <Swimming/>
            <Experience/>
            <HomeGallery/>
    </div>
  )
}

export default Home