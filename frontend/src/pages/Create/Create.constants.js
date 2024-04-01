import * as yup from "yup";
import { noteDescriptionValidation, noteFolderValidation, noteTitleValidation } from "../../constants/validations";

export const createNoteSchema = yup.object().shape({
  title: noteTitleValidation,
  description: noteDescriptionValidation,
  folder: noteFolderValidation,
})

export const createNoteInitialValues = {
  title: '',
  description: '',
  folder: '',
}