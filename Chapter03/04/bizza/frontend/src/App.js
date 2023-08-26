import React, {useState } from "react";

const App = () => {

  const [speakerName]= useState("Fred Morris");
  return (
     <div>
       <h2>This is Parent Component</h2>
       <ImmediateChildComponent speakerName={speakerName} />
     </div>
    );
     }
    function ImmediateChildComponent({speakerName}) {
      return (
        <div>
          <h2>This is an immediate Child Component</h2><hr/>
          <GrandChildComponent speakerName={speakerName} />
        </div>
      );
    }
    function GrandChildComponent({speakerName}) {
      return (
        <div>
          <h3>This is a Grand Child Component</h3>
          <h4>Speakers Name: {speakerName}</h4>

        </div>
      );
}
export default App;