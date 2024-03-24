import { Spacer } from "@nextui-org/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Folders from "../../components/Folders/Folders"
import MenuList from "../../components/MenuList/MenuList"
import Notes from "../../components/Notes"
import { getUserNotes } from "../../reducers/notesReducer"

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserNotes())
  }, [])

  const notes = useSelector((state) => state.notes)

  return (
    <div className="w-full laptop:px-20 flex flex-col tablet:flex-row justify-start items-start gap-4">
      <MenuList notes={notes} />
      <Spacer
        className="tablet:w-[300px] tablet:min-w-[300px]"
      />
      <div className="w-full overflow-hidden flex flex-col gap-10">
        <Notes title="Latest" notes={notes} />
        <Folders />
      </div>
    </div>
  )
}

export default Dashboard