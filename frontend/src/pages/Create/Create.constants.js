import * as yup from "yup";
import { noteCodeValidation, noteDescriptionValidation, noteEntriesValidation, noteFolderValidation, noteTitleValidation } from "../../constants/validations";

export const createNoteSchema = yup.object().shape({
  title: noteTitleValidation,
  description: noteDescriptionValidation,
  folder: noteFolderValidation,
  code: noteCodeValidation,
  entries: noteEntriesValidation,
})

export const createNoteInitialValues = {
  title: '',
  description: '',
  folder: '',
  code: '',
  entries: [],
}