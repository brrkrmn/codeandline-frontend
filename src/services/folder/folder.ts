import { backendService } from "../../api/api";
import { API_URLS } from "../../api/api.constants";
import { config } from "../../utils/token";
import { CreateFolderRequestData, CreateFolderResponse, GetFolderResponse, GetUserFoldersResponse, UpdateFolderRequestData, UpdateFolderResponse } from "./folder.types";

const folderService = {
  getUserFolders: async () => {
    const response = await backendService.get<GetUserFoldersResponse>(API_URLS.folder.allFolders, config)
    return response.data
  },
  getFolder: async (id: string) => {
    const response = await backendService.get<GetFolderResponse>(API_URLS.folder.byId(id), config)
    return response.data
  },
  createFolder: async (data: CreateFolderRequestData) => {
    const response = await backendService.post<CreateFolderResponse>(API_URLS.folder.allFolders, data, config)
    return response.data
  },
  deleteFolder: async (id: string) => {
    const response = await backendService.delete<void>(API_URLS.folder.byId(id), config)
    return response.data
  },
  updateFolder: async (id: string, data: UpdateFolderRequestData) => {
    const response = await backendService.put<UpdateFolderResponse>(API_URLS.folder.byId(id), data, config)
    return response.data
  }
}

export default folderService;