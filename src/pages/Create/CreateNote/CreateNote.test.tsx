import '@testing-library/jest-dom/extend-expect';
import { screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from "react-router-dom";
import { createNote } from '../../../mocks/createNote';
import { editNote } from '../../../mocks/editNote';
import server from '../../../utils/setupMockServer';
import { render } from "../../../utils/testUtils";
import CreateNote from "./CreateNote";

describe('CreateNote', () => {
  const routes = [
    { path: '/create/note', testId: 'form-note-create', buttonLabel: 'Create Note' },
    { path: '/edit-note', testId: 'form-note-edit', buttonLabel: 'Save Changes'}
  ]

  const renderComponent = (path: string) => {
    render(
      <MemoryRouter initialEntries={[path]}>
        <CreateNote />
      </MemoryRouter>
    )
  }

  const submitForm = (label: string) => {
    const titleInput = screen.getByTestId("input-title")
    userEvent.type(titleInput, "test")

    const codeEditor = screen.getByTestId('code-editor')
    userEvent.type(codeEditor, 'test')

    const submitButton = screen.getByRole('button', { name: label })
    userEvent.click(submitButton);
  }

  const submitFormWithoutTitle = (label: string) => {
    const codeEditor = screen.getByTestId('code-editor')
    userEvent.type(codeEditor, 'test')

    const submitButton = screen.getByRole('button', { name: label })
    userEvent.click(submitButton);
  }

  it.each(routes)('should render the correct form on $path path', ({ path, testId, buttonLabel }) => {
    renderComponent(path)

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByText(buttonLabel)).toBeInTheDocument();
  })

  describe('on note creation', () => {
    const path = routes[0].path
    const label = routes[0].buttonLabel

    it('should render success toast on submit', async () => {
      renderComponent(path)
      submitForm(label)

      await waitFor(() => {
        expect(screen.getByText("Note created successfully")).toBeInTheDocument()
      })
    })

    it('should render error toast without title', async () => {
      renderComponent(path)
      submitFormWithoutTitle(label)

      await waitFor(() => {
        expect(screen.getByText("Your note should have a title")).toBeInTheDocument()
      })

    })

    it('should render error toast with bad request', async () => {
      server.use(createNote.error)
      renderComponent(path)
      submitForm(label)

      await waitFor(() => {
        expect(screen.getByText("Couldn't create note")).toBeInTheDocument()
      })
    })
  })

  describe('on note edition', () => {
    const path = routes[1].path
    const label = routes[1].buttonLabel

    it('should render success toast on submit', async () => {
      renderComponent(path)
      submitForm(label)

      await waitFor(() => {
        expect(screen.getByText("Note edited successfully")).toBeInTheDocument()
      })
    })

    it('should render error toast with bad request', async () => {
      server.use(editNote.error)
      renderComponent(path)
      submitForm(label)

      await waitFor(() => {
        expect(screen.getByText("Couldn't edit note")).toBeInTheDocument()
      })
    })
  })
})