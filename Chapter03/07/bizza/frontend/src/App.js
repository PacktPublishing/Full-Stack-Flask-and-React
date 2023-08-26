import React, { useState} from "react";
const speakers = [
  {id: 10, name: "John Lewis"},
  { id: 11, name: "Mable Newton"},
];
const App = () => {
  const [text, setText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  console.log("Text", text);
  const handleClick = (e) => {
    setSearchTerm(e.target.value);
  };
  console.log("Search Term", text);
  const filteredSpeakers = speakers.filter((speaker) => {
    console.log("Filtering speakers...");
    return speaker.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <div>
       <input type="text" onChange={onChangeText} />
        <button onClick={handleClick}>Search</button>
      </div>
      {filteredSpeakers.map((filteredSpeaker) => (
        <li key={filteredSpeaker.id}>{filteredSpeaker.name}</li>
      ))}
    </div>
  );
};

export default App;