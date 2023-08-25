import React from 'react';

const speakers = {
  id: 1,
  name: "Juliet Runolf",
  jobTitle: "Director, Marketing",
  company: "Abernatny Group",
  address: {
    street: "Okaland Dtuse",
    city: "Greenland",
    state: "Houston",
    country: "USA",
  }
};

function App() {
  const { name, jobTitle, company, address } = speakers; // Destructuring of object properties
  const { street, city, state, country } = address; // Destructuring of nested address property

  return (
    <div>
      <h2>Name: {name}</h2>
      <h4>Position: {jobTitle}</h4>
      <h4>Company: {company}</h4>
      <h4>Street: {street}</h4>
      <h4>City: {city}</h4>
      <h4>State: {state}</h4>
      <h4>Country: {country}</h4>
    </div>
  );
}

export default App;
