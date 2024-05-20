import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import icons from '../../assets/icons';
import { logoutUser } from '../../reducers/userReducer';
import { buttonStyles } from '../CustomButton/constants';
import { P } from '../Typography/Typography';

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutUser());
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
          <DropdownItem key="profile" className="h-14 gap-2 group">
            <P variant="small" className="text-foreground-primary group-hover:text-primary-light">@{user.username}</P>
            <P variant="small" className="text-sm">{user.email}</P>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label="Help & Feedback">
          {/* <DropdownItem href="/help" key="help_and_feedback">
            Help & Feedback
          </DropdownItem> */}
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
