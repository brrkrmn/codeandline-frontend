import { Spacer } from "@nextui-org/react"
import Folders from "../../components/Folders/Folders"
import LatestNotes from "../../components/LatestNotes/LatestNotes"
import MenuList from "../../components/MenuList/MenuList"

const Dashboard = () => {
  return (
    <div className="w-full laptop:px-20 flex flex-col tablet:flex-row justify-start items-start gap-4">
      <MenuList />
      <Spacer
        className="tablet:w-[300px] tablet:min-w-[300px]"
      />
      <div className="w-full overflow-hidden flex flex-col gap-10">
        <LatestNotes />
        <Folders />
      </div>
    </div>
  )
}

export default Dashboard