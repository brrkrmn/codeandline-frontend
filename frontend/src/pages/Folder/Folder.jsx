import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import folderService from "../../services/folder";

const Folder = () => {
  const [folder, setFolder] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const fetchFolder = async (id) => {
      try {
        const folder = await folderService.getFolder(id);
        setFolder(folder)
      } catch (error) {
        return error
      }
    }
    fetchFolder(id);
  }, [id])

  if (folder) {
    return (
      <div className="border-2">{folder.title}</div>
    )
  }
}

export default Folder;