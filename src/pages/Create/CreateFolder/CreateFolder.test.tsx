import '@testing-library/jest-dom/extend-expect';
import { screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { createFolder } from '../../../mocks/createFolder';
import server from '../../../utils/setupMockServer';
import { render } from "../../../utils/testUtils";
import CreateFolder from './CreateFolder';

describe('CreateFolder', () => {
  const routes = [
    { path: '/create/folder', testId: 'form-folder-create', buttonLabel: 'Create Folder'},
    { path: '/edit-folder', testId: 'form-folder-edit', buttonLabel: "Edit Folder"}
  ]

  const renderCreateFolder = (path: string) => {
    render(
      <MemoryRouter initialEntries={[path]}>
        <CreateFolder />
      </MemoryRouter>
    )
  }

  const submitForm = (options?: {noTitle: boolean}) => {
    if (!options?.noTitle) {
      const titleInput = screen.getByTestId("input-title");
      userEvent.type(titleInput, "test");
    }

    const descriptionInput = screen.getByTestId("input-description");
    userEvent.type(descriptionInput, "test");

    const submitButton = screen.getByRole('button')
    userEvent.click(submitButton);
  }

  it.each(routes)('should render the correct form on $path path', ({ path, testId, buttonLabel }) => {
    renderCreateFolder(path)

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByText(buttonLabel)).toBeInTheDocument();
  })

  it('should render success toast on folder creation', async () => {
    renderCreateFolder('/create/folder')
    submitForm()

    await waitFor(() => {
      expect(screen.getByText('Folder created successfully')).toBeInTheDocument();
    })
  })

  it('should render error toast with no title', async () => {
    renderCreateFolder('/create/folder')
    submitForm({ noTitle: true })

    await waitFor(() => {
      expect(screen.getByText('Your folder should have a title')).toBeInTheDocument();
    })
  })

  it('should render error toast with bad request', async () => {
    server.use(createFolder.error)
    renderCreateFolder('/create/folder')
    submitForm()

    await waitFor(() => {
      expect(screen.getByText("Couldn't create folder")).toBeInTheDocument();
    })
  })
})