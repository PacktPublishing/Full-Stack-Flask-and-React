import React from 'react';
import SpeakersCard from '../../components/SpeakersCard/SpeakersCard';
import speakerList from '../../data/SpeakerList';
import Breadcrumb from '../../components/Common/Breadcrumb/Breadcrumb'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const SpeakersPage = () => {

  return (
		<>
		<Header/>
		<Breadcrumb title={"Speakers"}  />
		<div className="speakers-container">
			<div className="section-heading" >
				<h1>Meet Our Speakers</h1>
			</div>
			<div className="card">
      {speakerList.map((speaker) => (

        <SpeakersCard
		  key={speaker.id}
          name={speaker.name}
          jobTitle={speaker.jobTitle}
          company={speaker.company}
          profileImg={speaker.profileImg}
        />
      ))}
	  </div>
	  	</div>

		<Footer/>


		</>
  )

}

export default SpeakersPage;