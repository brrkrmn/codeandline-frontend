import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
import TextInput from '../../components/TextInput/TextInput';
import { textInputTypes } from '../../components/TextInput/constants';
import { createFolder, editFolder } from '../../reducers/foldersReducer';
import folderService from '../../services/folder';
import { createFolderInitialValues, createFolderSchema } from './Create.constants';

const CreateFolder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useParams().id;
  const formik = useFormik({
    initialValues: createFolderInitialValues,
    validationSchema: createFolderSchema,
    onSubmit: values => { onSubmit(values)}
  });

  useEffect(() => {
    if (window.location.pathname.split('/')[1] === 'edit-folder') {
      const fetchFolder = async (id) => {
        try {
          const folder = await folderService.getFolder(id)
          formik.setFieldValue('title', folder.title)
          formik.setFieldValue('description', folder.description)
        } catch (error) {
          return error
        }
      }
      fetchFolder(id);
    }
  }, [id])

  const onSubmit = (values) => {
    if (window.location.pathname === '/create/folder') {
      dispatch(createFolder(values))
      navigate('/')
    } else if (window.location.pathname.split('/')[1] === 'edit-folder') {
      dispatch(editFolder(id, values))
      navigate(`/folder-overview/${id}`)
    }
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
        {window.location.pathname === '/create/folder' ? 'Create Folder' : 'Save Folder'}
      </CustomButton>
    </form>
  )
}

export default CreateFolder;