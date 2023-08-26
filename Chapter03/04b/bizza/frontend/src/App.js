import React, {useState, useContext } from "react";
const context = React.createContext(null);
const App = () => {

const [speakerName]= useState("Fred Morris");


 	 return (
     <context.Provider value={{ speakerName}}>
    	   <h1>This is Parent Component</h1>
       	<ImmediateChildComponent  />
      </context.Provider>
 	  );
   	  }

    	function ImmediateChildComponent() {
      return (
        <div>
          <h2>This is an immediate Child Component</h2><hr/>
          <GrandChildComponent  />

        </div>
      );
    }

    function GrandChildComponent() {
   const {speakerName} = useContext(context);
      return (
        <div>
          <h3>This is a Grand Child Component</h3>
          <h4>Speakers Name: {speakerName}</h4>

        </div>
      );
}

export default App;