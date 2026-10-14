import React from 'react'
import PageBanner from '../components/PageBanner'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
         <PageBanner
        backgroundImage={require("../assets/Reception/DSC05843.JPG")}
        title="Contact Us"
        homeLink="/"
        homeText="Home"
        currentPage="Contact Us"
      />

      <ContactForm/>
    </div>
  )
}

export default Contact