import React, {useRef} from "react";
const App = () => {
    const inputRef = useRef(null);
    const clickButton = () => {
      inputRef.current.focus();
    };
    return (
      <>
        <input ref={inputRef} type="text" />
        <button onClick={clickButton}>click to Focus on input</button>
      </>
    );
  }
  export default App