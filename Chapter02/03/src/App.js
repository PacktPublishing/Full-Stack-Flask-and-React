import React from 'react'
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

}

function App()
{
 const {name, jobTitle, company} = speakers; //destructuring of object properties
  return (
      <div>
     <h2>Name: {name}</h2>
     <h4>Position: {jobTitle}</h4>
      <h4>Company: {company}</h4>
    </div>


  );
}
export default App