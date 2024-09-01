import { useFormik } from 'formik';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CustomButton from '../../../components/CustomButton/CustomButton';
import TextInput from '../../../components/TextInput/TextInput';
import { useAppContext } from '../../../context/appContext/appProvider';
import folderService from '../../../services/folder/folder';
import { CreateFolderRequestData } from '../../../services/folder/folder.types';
import { createFolderInitialValues, createFolderSchema } from '../Create.constants';
import { routes } from './createFolder.constants';

const CreateFolder = () => {
  const { editFolder, createFolder } = useAppContext()
  const navigate = useNavigate();
  const location = useLocation();
  const id = useParams().id as string;
  const formik = useFormik({
    initialValues: createFolderInitialValues,
    validationSchema: createFolderSchema,
    onSubmit: (values: CreateFolderRequestData) => { onSubmit(values)}
  });

  const path = location.pathname === routes.create.pathName ? routes.create.id : routes.edit.id

  useEffect(() => {
    if (path === routes.edit.id) {
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

  useEffect(() => {
    if (formik.errors?.title) {
      toast.error(formik.errors.title)
    }
  }, [formik.errors.title, formik.submitCount])

  const onSubmit = (values: CreateFolderRequestData) => {
    if (path === routes.create.id) {
      createFolder(values)
      navigate('/')
    } else if (path === routes.edit.id) {
      editFolder(id, values)
      navigate(`/folder-overview/${id}`)
    }
  }

  return (
    <form
      data-testid={`form-folder-${path}`}
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
        {routes[path].submitLabel}
      </CustomButton>
    </form>
  )
}

export default CreateFolder;