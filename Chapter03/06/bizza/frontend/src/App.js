import { useReducer, useEffect } from "react";
import axios from "axios";


const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "getEventSchedule":
      return {
        ...state,
        isLoading: true,
      };
    case "getEventScheduleSuccess":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case "getEventScheduleFailure":
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("render", state)
  useEffect(() => {
    dispatch({ type:"getEventSchedule" });
    axios.get("http://localhost:8000/schedules/")
      .then((response) => {
        console.log("response", response);
        dispatch({ type: "getEventScheduleSuccess", payload: response.data });
      })
      .catch(() => {
        dispatch({ type: "getEventScheduleFailure" });
      });
  }, []);
  return (
    <div>
      <h2>Event Schedules</h2>
      {state.isLoading && <div>Loading...</div>}
      <ul>
        {state.data && state.data.map((schedule) => (
          <li key={schedule.id}>
            Time: {schedule.time} <br />
           Speaker:{schedule.speaker}<br />
            Subject: {schedule.subjectTitle}<br />
           Venue: {schedule.venue}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;