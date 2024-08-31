import '@testing-library/jest-dom/extend-expect';
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LS_USER_ITEM } from "../../../../context/appContext/constants";
import { postLogin } from "../../../../mocks/postLogin";
import server from "../../../../utils/setupMockServer";
import { render } from "../../../../utils/testUtils";
import LoginForm from "./LoginForm";

describe('LoginForm', () => {
  it('should set token on submit', async () => {
    render(<LoginForm />)

    const usernameInput = screen.getByTestId('input-username');
    userEvent.type(usernameInput, "test")

    const passwordInput = screen.getByTestId('input-password');
    userEvent.type(passwordInput, "testtest")

    const submitButton = screen.getByRole('button', { name: 'auth.form.submitLabel.login' });
    userEvent.click(submitButton);

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
    server.use(postLogin.error);

    render(<LoginForm />)

    const usernameInput = screen.getByTestId('input-username');
    userEvent.type(usernameInput, "test")

    const passwordInput = screen.getByTestId('input-password');
    userEvent.type(passwordInput, "testtest")

    const submitButton = screen.getByRole('button', { name: 'auth.form.submitLabel.login' });
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Invalid username or password')).toBeInTheDocument();
    })
  })
})