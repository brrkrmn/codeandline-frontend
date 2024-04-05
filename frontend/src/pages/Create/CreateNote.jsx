import { Divider } from '@nextui-org/react';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import icons from '../../assets/icons';
import CodeEditor from '../../components/CodeEditor';
import CustomButton from '../../components/CustomButton/CustomButton';
import FoldersSelect from '../../components/FoldersSelect/FoldersSelect';
import TextEditor from '../../components/TextEditor/TextEditor';
import TextInput from '../../components/TextInput/TextInput';
import { textInputTypes } from '../../components/TextInput/constants';
import EditorContext from '../../utils/EditorContext';
import { createNoteInitialValues, createNoteSchema } from './Create.constants';

const CreateNote = () => {
  const dispatch = useDispatch();
  const { editor, setEditor } = useContext(EditorContext);
  const formik = useFormik({
    initialValues: createNoteInitialValues,
    validationSchema: createNoteSchema,
    onSubmit: values => {
      console.log(values)
    }
  })

  useEffect(() => {
    const onEditorChange = async () => {
      await formik.setFieldValue("code", editor.content)
    }
    onEditorChange()
  }, [editor])

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
          type={textInputTypes.description}
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
              editable={true}
              size='screen'
            />
          </div>
          <div className="w-full h-full basis-1/2 justify-between">
            <FieldArray
              name="entries"
              render={(arrayHelpers) => (
                <div className="flex flex-col items-center gap-4">
                  <div>
                    <CustomButton
                      type="button"
                      onPress={() => arrayHelpers.push({ content: '' })}
                    >
                      Add Entries {icons.create}
                    </CustomButton>
                  </div>
                  {formik.values.entries.map((entry, index) => (
                    <div key={index} className="flex flex-col gap-2 w-full overflow-visible	">
                      <TextEditor
                        name={`entries[${index}].content`}
                        value={formik.values.entries[index].content}
                        onChange={value => formik.setFieldValue(`entries[${index}].content`, value)}
                        />
                    </div>
                  ))}
                </div>
              )}
            />
          </div>
        </div>
        <Divider className="my-6" />
        <div className="mt-10 flex items-center justify-end">
          <CustomButton type="submit" className="border-primary-dark">
            Create Note
          </CustomButton>
        </div>
      </form>
    </FormikProvider>
  )
}

export default CreateNote;