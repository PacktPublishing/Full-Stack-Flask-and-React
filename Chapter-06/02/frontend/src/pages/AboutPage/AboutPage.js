import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/Common/Breadcrumb/Breadcrumb'

const AboutPage = () => {
  return(
    <>
    <Header />
    <Breadcrumb title={"About"}  />
   <div className='page-wrapper'> <h1>About Page</h1></div>
    <Footer/>
    </>
  )

}

export default AboutPage