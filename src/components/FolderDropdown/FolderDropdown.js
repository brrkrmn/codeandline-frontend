import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import icons from '../../assets/icons';
import { deleteFolder } from '../../reducers/foldersReducer';
import { buttonStyles } from '../CustomButton/constants';

const FolderDropdown = () => {
  const dispatch = useDispatch();
  const id = useParams().id;
  const navigate = useNavigate();

  const onEdit = () => {
    navigate(`/edit-folder/${id}`)
  }

  const onDelete = () => {
    dispatch(deleteFolder(id));
    navigate('/');
  }

  return (
    <Dropdown
      classNames={{
        content: "dark bg-background border-2 border-divider shadow-none"
      }}
    >
      <DropdownTrigger>
        <Button className={`${buttonStyles} mt-2 border-primary-dark px-2 min-w-fit`}>
          {icons.menu}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Folder Actions"
        itemClasses={{
          base: [
            "group",
            "rounded-md",
            "text-foreground-primary",
            "transition-opacity",
            "data-[hover=true]:bg-primary-background",
          ],
          title: [
            "group-hover:text-primary-light",
          ],
          description: [
            "text-foreground-dark",
            "group-hover:text-foreground-dark",
          ]
        }}
      >
        <DropdownSection title="Actions" showDivider>
          <DropdownItem
            key="edit"
            onPress={onEdit}
            description="Make changes to the folder"
            startContent={icons.edit}
          >
            Edit
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Danger Zone">
          <DropdownItem
            key="delete"
            onPress={onDelete}
            description="Permanently delete the folder"
            startContent={icons.trash}
            className="text-danger hover:text-danger"
            classNames={{
              title: ["group-hover:text-danger"],
              description: ["group-hover:text-foreground-dark"],
              base: ["data-[hover=true]:bg-primary-background"]
            }}
          >
            Delete Folder
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  )
}

export default FolderDropdown;
