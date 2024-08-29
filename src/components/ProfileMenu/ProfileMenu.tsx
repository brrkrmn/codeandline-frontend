import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import icons from '../../assets/icons';
import { useAppContext } from '../../context/appContext/appProvider';
import { buttonStyles } from '../CustomButton/constants';
import { P } from '../Typography/Typography';

const ProfileMenu = () => {
  const { userState, logoutUser } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/')
  }

  return (
    <Dropdown
      backdrop='blur'
      radius="sm"
      classNames={{
        content: "dark bg-background border-2 border-divider shadow-none"
      }}
    >
      <DropdownTrigger>
        <Button className={`${buttonStyles} ml-auto px-0 min-w-12 min-h-12`}>
          {icons.user}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Profile Menu"
        itemClasses={{
          base: [
            "rounded-md",
            "text-foreground-primary",
            "transition-opacity",
            "data-[hover=true]:text-primary-light",
            "data-[hover=true]:bg-primary-background",
          ]
        }}
      >
        <DropdownSection aria-label='Profile & Actions' showDivider>
          <DropdownItem isReadOnly key="profile" className="h-14 gap-2 group cursor-default">
            <P variant="small" className="text-foreground-primary group-hover:text-primary-light">@{userState?.username}</P>
            <P variant="small" className="text-sm">{userState?.email}</P>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem href="mailto:esma.berra.karaman@hotmail.com?subject=Code%26Line%20Help%20and%20Feedback" key="help_and_feedback">
            Help & Feedback
          </DropdownItem>
          <DropdownItem
            key="logout"
            endContent={icons.logout}
            onPress={handleLogout}
          >
            Log Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  )
}

export default ProfileMenu;
