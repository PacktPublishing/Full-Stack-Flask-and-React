import {useQuery} from 'react-query'
import axios from 'axios';
function App() {
  const{data, isLoading, error} = useQuery("speakers", ()=>(axios("https://jsonplaceholder.typicode.com/users")
))
 if(error) return <h4>Error: {error.message}, retry again</h4>
 if(isLoading) return <h4>...Loading data</h4>
 console.log(data);
  return (
    <>
    <h1>Displaying Speakers Information</h1>
    <ul>
    {data.data.map(speaker => (
      <li key={speaker.id}>
        {speaker.name},  <em> {speaker.email} </em>
      </li>
    ))}
  </ul>
      </>  );
}
export default App;