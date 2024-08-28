import { Avatar, Divider, Tooltip } from "@nextui-org/react"
import icons from "../../assets/icons"
import CustomButton from "../../components/CustomButton/CustomButton"
import { H5, P } from "../../components/Typography/Typography"
import { useAppContext } from "../../context/appContext/appProvider"

const Profile = () => {
  const { userState } = useAppContext();
  const user = userState

  return (
    <div className="w-full overflow-hidden flex flex-col laptop:flex-row gap-12 mobile:px-20">
      <div className="flex flex-col">
        <Tooltip
          content="Add profile photo"
          placement="bottom"
          offset={-20}
          delay={400}
        >
          <Avatar
            className="h-[200px] w-[200px] flex items-center justify-center mobile:w-60 mobile:h-60 cursor-pointer self-center bg-background border-1 border-primary-dark shadow-medium transition hover:drop-shadow-sm"
            fallback={icons.addPhoto}
            src="https://avatars.githubusercontent.com/u/30373425?v=4"
          />
        </Tooltip>
        <H5 className="mt-6 mb-1">@{user.username}</H5>
        <P variant="tiny">{user.email}</P>
        <CustomButton className="my-6 h-10">Edit Profile</CustomButton>
      </div>
      <Divider className="w-full h-divider laptop:h-full laptop:w-divider" />
    </div>
  )
}

export default Profile