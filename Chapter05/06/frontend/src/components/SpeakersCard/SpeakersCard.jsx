import React from 'react'

const SpeakersCard= ({name, jobTitle, company, profileImg}) => {
  return (
  <>


			<div className="card">
				<div className="speaker-card">
					<div className="speaker-info">
					<img src={`${profileImg}`} alt={name} />
						<span>
							<h3>{name}</h3>
						</span>
						<p>{jobTitle}</p>
						<p>{company}</p>

					</div>

				</div>
			</div>



   </>)
}

export default SpeakersCard;