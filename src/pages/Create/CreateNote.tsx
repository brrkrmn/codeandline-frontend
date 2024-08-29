import { Accordion, AccordionItem, Divider, Tooltip } from '@nextui-org/react';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import icons from '../../assets/icons';
import CodeEditor from '../../components/CodeEditor';
import CustomButton from '../../components/CustomButton/CustomButton';
import { buttonStyles } from '../../components/CustomButton/constants';
import FoldersSelect from '../../components/FoldersSelect/FoldersSelect';
import TextEditor from '../../components/TextEditor/TextEditor';
import TextInput from '../../components/TextInput/TextInput';
import { H5 } from '../../components/Typography';
import { useAppContext } from '../../context/appContext/appProvider';
import { useEditorContext } from '../../context/editorContext/editorProvider';
import noteService from '../../services/note/note';
import { createNoteInitialValues, createNoteSchema } from './Create.constants';

const CreateNote = () => {
  const { createNote, editNote } = useAppContext();
  const navigate = useNavigate();
  const id = useParams().id as string;
  const [selectedEntry, setSelectedEntry] = useState()
  const { editor, setEditor } = useEditorContext().editorValue;
  const formik = useFormik({
    initialValues: createNoteInitialValues,
    validationSchema: createNoteSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: values => {onSubmit(values)}
  })

  const onSubmit = (values) => {
    if (window.location.pathname === '/create/note') {
      createNote(values)
      navigate('/')
    } else if (window.location.pathname.split('/')[1] === 'edit-note') {
      editNote(id, values)
      navigate(`/note-overview/${id}`)
    }
  }

  useEffect(() => {
    if (window.location.pathname.split('/')[1] === 'edit-note') {
      const fetchNote = async (id: string) => {
        try {
          const note = await noteService.getNote(id);
          await formik.setValues(note)
          await formik.setFieldValue('folder', note.folder.id)
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
      await formik.setFieldValue(`entries[${selectedEntry?.currentKey}].lineNumbers`, editor.selectedLines)
    }
    onSelectedLineChange()
  }, [editor.selectedLines])

  useEffect(() => {
    if (selectedEntry?.size === 1) {
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

  useEffect(() => {
    if (formik.errors?.title) {
      toast.error(formik.errors.title)
    }
  }, [formik.errors.title, formik.submitCount])

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full"
      >
        <TextInput
          id="title"
          name="title"
          type="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        <TextInput
          id="description"
          name="description"
          type="noteDescription"
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
          value={formik.values.folder}
        />
        <Divider className="my-6" />
        <div className="flex flex-col laptop:flex-row items-start justify-center gap-10 px-2">
          <div className="w-full overflow-hidden basis-1/2 sticky top-24">
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
                    <Tooltip
                      color="secondary"
                      content="To select lines, open any entry and click on the code lines to add them to that entry."
                    ><span className={`${buttonStyles} transition p-1 ml-auto`}>
                      {icons.questionBox}
                    </span>
                    </Tooltip>
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
                              {formik.values.entries[index].lineNumbers.map((number: number) => (
                                <div className="border-1 w-8 text-lg font-light flex items-center justify-center rounded-md text-primary-light border-primary-dark">
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