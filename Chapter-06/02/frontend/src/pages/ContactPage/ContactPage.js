import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/Common/Breadcrumb/Breadcrumb'
const ContactPage = () => {
  return(
    <>
    <Header />
    <Breadcrumb title={"Contact"}  />
   <div className='page-wrapper'> <h1>Contact Page</h1></div>
    <Footer/>
    </>
  )
}

export default ContactPage