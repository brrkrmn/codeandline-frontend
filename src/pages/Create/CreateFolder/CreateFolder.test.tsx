import '@testing-library/jest-dom/extend-expect';
import { screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { createFolder } from '../../../mocks/createFolder';
import { editFolder } from '../../../mocks/editFolder';
import server from '../../../utils/setupMockServer';
import { render } from "../../../utils/testUtils";
import CreateFolder from './CreateFolder';

describe('CreateFolder', () => {
  const routes = [
    { path: '/create/folder', testId: 'form-folder-create', buttonLabel: 'Create Folder'},
    { path: '/edit-folder', testId: 'form-folder-edit', buttonLabel: "Edit Folder"}
  ]

  const renderComponent = (path: string) => {
    render(
      <MemoryRouter initialEntries={[path]}>
        <CreateFolder />
      </MemoryRouter>
    )
  }

  const submitForm = () => {
    const titleInput = screen.getByTestId("input-title");
    userEvent.type(titleInput, "test");

    const descriptionInput = screen.getByTestId("input-description");
    userEvent.type(descriptionInput, "test");

    const submitButton = screen.getByRole('button')
    userEvent.click(submitButton);
  }

  const submitFormWithNoTitle = () => {
    const submitButton = screen.getByRole('button')
    userEvent.click(submitButton);
  }

  it.each(routes)('should render the correct form on $path path', ({ path, testId, buttonLabel }) => {
    renderComponent(path)

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByText(buttonLabel)).toBeInTheDocument();
  })

  describe('on folder creation', () => {
    it('should render success toast on submit', async () => {
      renderComponent('/create/folder')
      submitForm()

      await waitFor(() => {
        expect(screen.getByText('Folder created successfully')).toBeInTheDocument();
      })
    })

    it('should render error toast with no title', async () => {
      renderComponent('/create/folder')
      submitFormWithNoTitle()

      await waitFor(() => {
        expect(screen.getByText('Your folder should have a title')).toBeInTheDocument();
      })
    })

    it('should render error toast with bad request', async () => {
      server.use(createFolder.error)
      renderComponent('/create/folder')
      submitForm()

      await waitFor(() => {
        expect(screen.getByText("Couldn't create folder")).toBeInTheDocument();
      })
    })
  })

  describe('on folder edition', () => {
    it('should render success toast on submit', async () => {
      renderComponent('/edit-folder')
      submitForm()

      await waitFor(() => {
        expect(screen.getByText("Folder edited successfully")).toBeInTheDocument();
      })
    })

    it('should render error toast with no title', async () => {
      server.use(editFolder.error)
      renderComponent('/edit-folder')
      submitFormWithNoTitle()

      await waitFor(() => {
        expect(screen.getByText("Your folder should have a title")).toBeInTheDocument();
      })
    })

    it('should render error toast with bad request', async () => {
      server.use(editFolder.error)
      renderComponent('/edit-folder')
      submitForm()

      await waitFor(() => {
        expect(screen.getByText("Couldn't edit folder")).toBeInTheDocument();
      })
    })
  })
})