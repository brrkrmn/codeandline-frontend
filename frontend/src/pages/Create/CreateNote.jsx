import { Divider } from '@nextui-org/react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import CodeEditor from '../../components/CodeEditor';
import CustomButton from '../../components/CustomButton/CustomButton';
import FoldersSelect from '../../components/FoldersSelect/FoldersSelect';
import TextInput from '../../components/TextInput/TextInput';
import { textInputTypes } from '../../components/TextInput/constants';
// import { H5 } from '../../components/Typography';
import { useContext, useEffect } from 'react';
import AddNoteInput from '../../components/AddNoteInput/AddNoteInput';
import EditorContext from '../../utils/EditorContext';
import { createNoteInitialValues, createNoteSchema } from './Create.constants';

const CreateNote = () => {
  const dispatch = useDispatch();
  const { editor } = useContext(EditorContext);
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
      <div className='mt-4'>
        <FoldersSelect
          id="folder"
          name="folder"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.selectFolder}
        />
      </div>
      <Divider className="my-6" />
      <div className="flex flex-col laptop:flex-row items-start justify-center gap-10 px-2">
        <div className=" w-full overflow-hidden basis-1/2">
          <CodeEditor
            editable={true}
            size='screen'
          />
        </div>
        <div className="basis-1/2">
          {/* <H5>Add Notes</H5> */}
          <AddNoteInput />
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <CustomButton
          type="submit"
        >
          Create Note
        </CustomButton>
      </div>
    </form>
  )
}

export default CreateNote;