import React,{useState} from "react";

const SearchSpeaker = () =>{
	 const [searchText, setSearchText] = useState('');
     return (
       <div>
         <label htmlFor="search">Search speaker: </label>
         <input id="search" type="text" onChange={e => setSearchText(e.target.value)} />
         <p>
           Searching for <strong>{searchText}</strong>
         </p>
       </div>

     );

   }



export default SearchSpeaker;