import { Folder } from "../../context/appContext/appContext.types";

export type GetUserFoldersResponse = Folder[];

export type GetFolderResponse = Folder;

export type CreateFolderRequestData = {
  title: string;
  description?: string;
}

export type CreateFolderResponse = Folder

export type UpdateFolderRequestData = {
  title: string;
  decsription?: string;
}

export type UpdateFolderResponse = Folder