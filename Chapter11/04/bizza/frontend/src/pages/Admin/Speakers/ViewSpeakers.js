import React, { useEffect, useState } from 'react';
import { getSpeakers } from './SpeakersAPI';

const ViewSpeakers = () => {
  const [speakers, setSpeakers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSpeakers = async () => {
    try {
      const speakerData = await getSpeakers();
      setSpeakers(speakerData);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSpeakers();
  }, []);

  if (isLoading) {
    return <p>Loading speakers...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Speakers</h1>
      {speakers.length === 0 ? (
        <p>No speakers found.</p>
      ) : (
        <table>
          <thead>
            <tr>
			  <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Position</th>
              <th>Bio</th>

              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {speakers.map((speaker) => (
              <tr key={speaker.id}>
				<td>{speaker.speaker_avatar}</td>
                <td>{speaker.name}</td>
                <td>{speaker.email}</td>
                <td>{speaker.company}</td>
                <td>{speaker.position}</td>
                <td>{speaker.bio}</td>
                <td>{speaker.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewSpeakers;
