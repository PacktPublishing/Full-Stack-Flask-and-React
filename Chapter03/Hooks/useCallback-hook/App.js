import React, { useState, useCallback } from "react";
import { v4 as uuid } from "uuid";

const App = () => {
  console.log("Rendering process for: App Component");
  const [speakers, setSpeakers] = useState([
    { id: "1", name: "Brown Lewis" },
    { id: "2", name: "Micheal John" },
    { id: "3", name: "Donald Bolton" },
    { id: "4", name: "Ambrov Lee" },
  ]);

  const [text, setText] = useState("");

  const handleTextInput = (e) => {
    setText(e.target.value);
  };

  const handleAddSpeaker = () => {
    setSpeakers(speakers.concat({ id: uuid(), name: text }));
  };

  const handleRemoveSpeaker = useCallback(
    (id) => setSpeakers(speakers.filter((user) => user.id !== id)),
    [speakers]
  );
  return (
    <div>
      <input type="text" value={text} onChange={handleTextInput} />
      <button type="button" onClick={handleAddSpeaker}>
        + Add a Speaker
      </button>

      <List list={speakers} onRemove={handleRemoveSpeaker} />
    </div>
  );
};

const List = React.memo(({ list, onRemove }) => {
  console.log("Rendering process for: List Component");
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
});

const ListItem = React.memo(({ item, onRemove }) => {
  console.log("Rendering process for: ListItem Component");
  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );
});

export default App;
