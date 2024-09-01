import '@testing-library/jest-dom/extend-expect';
import { screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { render } from "../../utils/testUtils";
import Auth from "./Auth";

describe('Auth', () => {
  const routes = [
    { path: '/login', testId: 'form-login' },
    { path: '/signup', testId: 'form-signup' },
  ]

  const renderComponent = (path: typeof routes[number]['path']) => {
    render(
      <MemoryRouter initialEntries={[path]}>
        <Auth />
      </MemoryRouter>
    )
  }

  it.each(routes)('should render the correct form on $path path', ({ path, testId }) => {
    renderComponent(path)
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  })

  it('should switch between tabs on click', async () => {
    renderComponent(routes[0].path)

    const signupTabButton = screen.getByRole('tab', { name: 'auth.signup' })
    userEvent.click(signupTabButton)

    await waitFor(() => {
      expect(screen.getByTestId(routes[1].testId)).toBeInTheDocument();
    })
  })
})