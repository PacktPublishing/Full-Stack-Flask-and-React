import {render,screen, fireEvent,cleanup} from "@testing-library/react";
import SpeakerCard from '../components/SpeakerCard/SpeakerCard'

const speaker={
	name:"Olatunde Adedeji",
	occupation:"Software Enginner",
	company: "Mowebsite",
	email:"admin@admin.com",
	phone:"01-333333",
}
afterEach(() => {
	return cleanup();
  });

test("should render the SpeakerCard component", ()=>{
	render(<SpeakerCard/>);
	const card = screen.getByTestId("card");
	expect(card).toBeDefined()
});

test("should make sure the toggle button shows or hides details", ()=>{
	render(<SpeakerCard speaker={speaker}/>);
	const toggleButton = screen.getByTestId("toggle-test");
	expect(screen.queryByTestId("test-details")).toBeNull();
	fireEvent.click(toggleButton);
	expect(screen.getByTestId("test-details")).toBeInTheDocument();
});