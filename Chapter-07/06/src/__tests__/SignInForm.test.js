import { render, screen,cleanup } from '@testing-library/react';
import  SignInForm from'../components/Auth/SignInForm/SignInForm';

afterEach(() => {
	return cleanup();
  });

test("Email Address should be rendered to screen", () => {
  render(<SignInForm />);
  const linkElEmailInput = screen.getByText(/Email Address/i);
  expect(linkElEmailInput).toBeInTheDocument();

});

test("Password should be rendered to screen", () => {
    render(<SignInForm />);
    const linkElPasswordInput = screen.getByText(/Password/i);
    expect(linkElPasswordInput).toBeInTheDocument();  });

  test("Sign In should be rendered to screen", () => {

    render(<SignInForm />);

    const linkElSignInBtn = screen.getByTest(/SignIn/i);

    expect(linkElSignInBtn).toBeInTheDocument();

  });