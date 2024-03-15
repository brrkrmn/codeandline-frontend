import { Avatar, Divider, Tooltip } from "@nextui-org/react"
import { useSelector } from "react-redux"
import icons from "../../assets/icons"
import CustomButton from "../../components/CustomButton/CustomButton"
import Folders from "../../components/Folders/Folders"
import Notes from "../../components/Notes"
import { H5, P } from "../../components/Typography/Typography"

const Profile = () => {
  const user = useSelector((state) => state.user)

  return (
    <div className="w-full flex gap-12 px-20">
      <div className="flex flex-col">
        <Tooltip
          content="Add profile photo"
          placement="bottom"
          offset={-20}
          delay={400}
        >
          <Avatar
            className="w-60 h-60 cursor-pointer self-center bg-background border-1 border-primary-dark shadow-medium transition hover:drop-shadow-sm"
            fallback={icons.addPhoto}
            src= "https://avatars.githubusercontent.com/u/30373425?v=4"
          />
        </Tooltip>
        <H5 className="mt-6 mb-1">@{user.username}</H5>
        <P variant="tiny">{user.email}</P>
        <CustomButton className="my-6 h-10">Edit Profile</CustomButton>

      </div>
      <Divider orientation="vertical" />
      <div className="w-full">
        <Notes />
        <Divider className="my-8"/>
        <Folders />
      </div>
    </div>
  )
}

export default Profile