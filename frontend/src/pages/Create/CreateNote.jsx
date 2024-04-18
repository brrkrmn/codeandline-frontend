import { Accordion, AccordionItem, Divider } from '@nextui-org/react';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import icons from '../../assets/icons';
import CodeEditor from '../../components/CodeEditor';
import CustomButton from '../../components/CustomButton/CustomButton';
import FoldersSelect from '../../components/FoldersSelect/FoldersSelect';
import TextEditor from '../../components/TextEditor/TextEditor';
import TextInput from '../../components/TextInput/TextInput';
import { textInputTypes } from '../../components/TextInput/constants';
import { H5 } from '../../components/Typography';
import { createNote, editNote } from '../../reducers/notesReducer';
import noteService from '../../services/note';
import EditorContext from '../../utils/EditorContext';
import { createNoteInitialValues, createNoteSchema } from './Create.constants';

const CreateNote = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useParams().id;
  const [selectedEntry, setSelectedEntry] = useState('')
  const { editor, setEditor } = useContext(EditorContext);
  const formik = useFormik({
    initialValues: createNoteInitialValues,
    validationSchema: createNoteSchema,
    onSubmit: values => {onSubmit(values)}
  })

  const onSubmit = (values) => {
    if (window.location.pathname === '/create/note') {
      dispatch(createNote(values))
      navigate('/')
    } else if (window.location.pathname.split('/')[1] === 'edit-note') {
      dispatch(editNote(id, values))
      navigate(`/note-overview/${id}`)
    }
  }

  useEffect(() => {
    if (window.location.pathname.split('/')[1] === 'edit-note') {
      const fetchNote = async (id) => {
        try {
          const note = await noteService.getNote(id);
          await formik.setValues(note)
          setEditor({
            ...editor,
            content: note.code
          })
        } catch (error) {
          return error
        }
      }
      fetchNote(id);
    } else {
      const resetEditor = async () => {
        await formik.setFieldValue("code", '')
        setEditor({
          ...editor,
          content: '',
        })
      }
      resetEditor();
    }
  }, [id])

  useEffect(() => {
    const onEditorChange = async () => {
      await formik.setFieldValue("code", editor.content)
    }
    onEditorChange()
  }, [editor.content])

  useEffect(() => {
    const onSelectedLineChange = async () => {
      await formik.setFieldValue(`entries[${selectedEntry.currentKey}].lineNumbers`, editor.selectedLines)
    }
    onSelectedLineChange()
  }, [editor.selectedLines])

  useEffect(() => {
    if (selectedEntry.size === 1) {
      setEditor({
        ...editor,
        selectableLines: true,
        selectedLines: formik.values.entries[selectedEntry.currentKey].lineNumbers
      })
    } else {
      setEditor({
        ...editor,
        selectableLines: false
      })
    }
  }, [selectedEntry])

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full"
      >
        <TextInput
          id="title"
          name="title"
          type={textInputTypes.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        <TextInput
          id="description"
          name="description"
          type={textInputTypes.noteDescription}
          className="line-clamp-2"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        <FoldersSelect
          id="folder"
          name="folder"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.selectFolder}
        />
        <Divider className="my-6" />
        <div className="flex flex-col laptop:flex-row items-start justify-center gap-10 px-2">
          <div className="w-full overflow-hidden basis-1/2">
            <CodeEditor
              highlightedLine={editor.selectedLines}
              size='screen'
              code={formik.values.code}
            />
          </div>
          <div className="w-full h-full basis-1/2 justify-between">
            <FieldArray
              name="entries"
              render={(arrayHelpers) => (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full flex items-center gap-4">
                    <H5>Entries</H5>
                    <CustomButton
                      type="button"
                      onPress={() => arrayHelpers.push({ lineNumbers: [], content: '' })}
                      className="min-w-fit px-3"
                    >
                      {icons.create}
                    </CustomButton>
                  </div>
                  <Divider />
                  <Accordion
                    selectedKeys={selectedEntry}
                    onSelectionChange={setSelectedEntry}
                    selectionMode='single'
                    variant="splitted"
                  >
                    {formik.values.entries.map((entry, index) => (
                      <AccordionItem
                        key={index}
                        aria-label={`Entry ${index + 1}`}
                        title={`Entry ${index + 1}`}
                        subtitle={
                          <div className="flex items-center gap-2">
                            Selected lines:
                            <div className="flex items-center gap-2">
                              {formik.values.entries[index].lineNumbers.map(number => (
                                <div className="border-1 border-divider w-8 text-lg font-light flex items-center justify-center rounded-md text-primary-light border-primary-dark">
                                  {number}
                                </div>
                              ))}
                            </div>
                          </div>
                        }
                        className="next-accordion-item transition hover:border-primary-light"
                        classNames={{
                          base: [
                            "group-[.is-splitted]:shadow-none",
                            "group-[.is-splitted]:bg-background",
                            "border-[.1px]",
                            "border-divider",
                            "transition"
                          ],
                        }}
                      >
                        <TextEditor
                          name={`entries[${index}].content`}
                          value={formik.values.entries[index].content}
                          onChange={value => formik.setFieldValue(`entries[${index}].content`, value)}
                        />
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            />
          </div>
        </div>
        <div className="mt-10 flex items-center justify-end">
          <CustomButton type="submit" className="border-primary-dark">
            {window.location.pathname === '/create/note' ? 'Create Note' : 'Save Changes'}
          </CustomButton>
        </div>
      </form>
    </FormikProvider>
  )
}

export default CreateNote;