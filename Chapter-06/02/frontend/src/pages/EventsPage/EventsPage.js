import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/Common/Breadcrumb/Breadcrumb'

const EventsPage = () => {
  return(
    <>
    <Header />
    <Breadcrumb title={"Events"}  />
   <div className='page-wrapper'> <h1>Events Page</h1></div>
    <Footer/>
    </>
  )
}
export default EventsPage