import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
import TextInput from '../../components/TextInput/TextInput';
import { textInputTypes } from '../../components/TextInput/constants';
import { createFolder } from '../../reducers/foldersReducer';
import { createFolderInitialValues, createFolderSchema } from './Create.constants';

const CreateFolder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: createFolderInitialValues,
    validationSchema: createFolderSchema,
    onSubmit: values => {
      onSubmit(values)
    }
  });

  const onSubmit = (values) => {
    dispatch(createFolder(values))
    navigate('/')
  }

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
        type={textInputTypes.folderDescription}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
      />
      <CustomButton type="submit" className="border-primary-dark ml-3 mt-10">
        Create Folder
      </CustomButton>
    </form>
  )
}

export default CreateFolder;