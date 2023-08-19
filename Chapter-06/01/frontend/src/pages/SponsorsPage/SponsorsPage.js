import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/Common/Breadcrumb/Breadcrumb'

const SponsorsPage = () => {
  return(
    <>
    <Header />
    <Breadcrumb title={"Sponsors"}  />
   <div className='page-wrapper'> <h1>Sponsors Page</h1></div>
    <Footer/>
    </>
  )

}

export default SponsorsPage