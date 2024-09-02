import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
import TextInput from '../../components/TextInput/TextInput';
import { useAppContext } from '../../context/appContext/appProvider';
import folderService from '../../services/folder/folder';
import { CreateFolderRequestData } from '../../services/folder/folder.types';
import { createFolderInitialValues, createFolderSchema } from './Create.constants';

const CreateFolder = () => {
  const { editFolder, createFolder } = useAppContext()
  const navigate = useNavigate();
  const id = useParams().id as string;
  const formik = useFormik({
    initialValues: createFolderInitialValues,
    validationSchema: createFolderSchema,
    onSubmit: (values: CreateFolderRequestData) => { onSubmit(values)}
  });

  useEffect(() => {
    if (window.location.pathname.split('/')[1] === 'edit-folder') {
      const fetchFolder = async (id: string) => {
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

  const onSubmit = (values: CreateFolderRequestData) => {
    if (window.location.pathname === '/create/folder') {
      createFolder(values)
      navigate('/')
    } else if (window.location.pathname.split('/')[1] === 'edit-folder') {
      editFolder(id, values)
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
        type="title"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />
      <TextInput
        id="description"
        name="description"
        type="folderDescription"
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