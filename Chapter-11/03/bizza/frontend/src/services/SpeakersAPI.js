import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1';

// Function to handle errors
const handleErrors = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    console.error('API Error:', error.response.status, error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error('API Error: No response received', error.request);
  } else {
    // Something else happened while making the request
    console.error('API Error:', error.message);
  }
  throw error;
};

// Function to set headers with Content-Type: application/json
const setHeaders = () => {
  axios.defaults.headers.common['Content-Type'] = 'application/json';
};

// Function to get speakers
export const getSpeakers = async () => {
  try {
    setHeaders();
    const response = await axios.get(`${API_URL}/speakers`);
    return response.data;
  } catch (error) {
    handleErrors(error);
  }
};

// Function to add a speaker
export const addSpeaker = async (speaker) => {
  try {
    setHeaders();
    const response = await axios.post(`${API_URL}/speakers`, speaker);
    return response.data;
  } catch (error) {
    handleErrors(error);
  }
};

// Function to update a speaker
export const updateSpeaker = async (speakerId, updatedSpeaker) => {
  try {
    setHeaders();
    const response = await axios.put(`${API_URL}/speakers/${speakerId}`, updatedSpeaker);
    return response.data;
  } catch (error) {
    handleErrors(error);
  }
};

// API function to delete a speaker
export const deleteSpeaker = async (speakerId) => {
	const url = `/api/v1/speakers/${speakerId}`;

	try {
	  const speakerResponse = await axios.get(url);
	  const speaker = speakerResponse.data;

	  if (!speaker) {
		throw new Error("Speaker not found");
	  }

	  const eventsResponse = await axios.get(`/api/v1/events?speakerId=${speakerId}`);
	  const events = eventsResponse.data;

	  if (events.length > 0) {
		throw new Error("This speaker has associated events, please delete them first");
	  }

	  await axios.delete(url);
	  return speaker;
	} catch (err) {
	  if (err.response) {
		const { status, data } = err.response;
		throw new Error(`${status}: ${data.error}`);
	  } else if (err.request) {
		throw new Error('Error: No response received from server');
	  } else {
		throw new Error(err.message);
	  }
	}
  };
