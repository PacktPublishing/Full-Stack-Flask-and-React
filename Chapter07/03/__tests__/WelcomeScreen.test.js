import {render,screen,cleanup} from "@testing-library/react";
import WelcomeScreen from "../WelcomeScreen";


afterEach(() => {
  return cleanup();
});

test("should show Welcome text to screen", () => {
    render(<WelcomeScreen />);
    const showText = screen.getByText(/Welcome to Bizza Conference Platform/i);
    expect(showText).toBeInTheDocument();

  });