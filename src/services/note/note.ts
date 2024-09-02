import { backendService } from '../../api/api';
import { API_URLS } from '../../api/api.constants';
import { config } from '../../utils/token';
import { CreateNoteRequestData, CreateNoteResponse, GetNoteResponse, GetUserNotesResponse, UpdateNoteRequestData, UpdateNoteResponse } from './note.types';

const noteService = {
  getUserNotes: async () => {
    const response = await backendService.get<GetUserNotesResponse>(API_URLS.note.allNotes, config)
    return response.data
  },
  getNote: async (id: string) => {
    const response = await backendService.get<GetNoteResponse>(API_URLS.note.byId(id), config)
    return response.data
  },
  createNote: async (data: CreateNoteRequestData) => {
    const response = await backendService.post<CreateNoteResponse>(API_URLS.note.allNotes, data, config)
    return response.data
  },
  deleteNote: async (id: string) => {
    const response = await backendService.delete<void>(API_URLS.note.byId(id), config)
    return response.data
  },
  updateNote: async (id: string, data: UpdateNoteRequestData) => {
    const response = await backendService.put<UpdateNoteResponse>(API_URLS.note.byId(id), data, config)
    return response.data
  }
}

export default noteService;