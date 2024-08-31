import '@testing-library/jest-dom/extend-expect';
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LS_USER_ITEM } from '../../../../context/appContext/constants';
import { postSignup } from '../../../../mocks/postSignup/postSignup';
import server from '../../../../utils/setupMockServer';
import { render } from "../../../../utils/testUtils";
import SignupForm from "./SignupForm";

describe('SignupForm', () => {
  it('should create user on submit', async () => {
    render(<SignupForm />);

    const usernameInput = screen.getByTestId('input-username');
    userEvent.type(usernameInput, 'test');

    const emailInput = screen.getByTestId('input-email');
    userEvent.type(emailInput, "test@test.com")

    const passwordInput = screen.getByTestId('input-password');
    userEvent.type(passwordInput, "testtest")

    const confirmPasswordInput = screen.getByTestId('input-confirmPassword');
    userEvent.type(confirmPasswordInput, "testtest")

    const submitButton = screen.getByRole('button', { name: 'auth.form.submitLabel.signup' })
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Account created successfully')).toBeInTheDocument();
    })

    await waitFor(() => {
      const user = window.localStorage.getItem(LS_USER_ITEM)

      // @ts-ignore
      expect(JSON.parse(user)).toStrictEqual({
        username: "test",
        email: "test@test.com",
        token: "testToken"
      })
    })

  })

  it('should show error toast with invalid credentials', async () => {
    server.use(postSignup.error);
    render(<SignupForm />);

    const usernameInput = screen.getByTestId('input-username');
    userEvent.type(usernameInput, 'test');

    const emailInput = screen.getByTestId('input-email');
    userEvent.type(emailInput, "test@test.com")

    const passwordInput = screen.getByTestId('input-password');
    userEvent.type(passwordInput, "testtest")

    const confirmPasswordInput = screen.getByTestId('input-confirmPassword');
    userEvent.type(confirmPasswordInput, "testtest")

    const submitButton = screen.getByRole('button', { name: 'auth.form.submitLabel.signup' })
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("There's already an account with this email")).toBeInTheDocument();
    })
  })
})