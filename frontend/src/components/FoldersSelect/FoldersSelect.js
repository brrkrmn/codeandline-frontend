import { Select, SelectItem, SelectSection } from '@nextui-org/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../../assets/icons';
import { getUserFolders } from '../../reducers/foldersReducer';

const FoldersSelect = ({ type }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserFolders())
  }, [])

  const userFolders = useSelector((state) => state.folders)

  return (
    <Select
      variant="bordered"
      size='xs'
      radius='sm'
      placeholder='Link to a folder'
      className="w-[14%] ml-3 text-foreground-dark"
      startContent={icons.folder}
      classNames={{
        trigger: [
          "border-1",
          "border-primary-dark",
          "data-[hover=true]:border-primary-light",
          "data-[open=true]:border-primary-light",
          "data-[focus=true]:border-primary-light",
          "data-[hover=true]:hover:drop-shadow-sm"
        ],
        value: [
          "text-foreground-dark"
        ],
      }}
      listboxProps={{
        itemClasses: {
          base: [
            "text-foreground-dark",
            "dark:data-[hover=true]:text-primary-light",
            "dark:data-[hover=true]:bg-content1",
            "data-[selectable=true]:focus:bg-content1",
            "data-[selectable=true]:focus:text-primary-light",
          ],
        },
      }}
      popoverProps={{
        classNames: {
          content: "dark bg-background shadow-none border-2 border-divider",
        },
      }}
    >
      <SelectSection showDivider>
        <SelectItem>
          None
        </SelectItem>
      </SelectSection>
      {userFolders?.map(item => (
        <SelectItem
          key={item.id}
          value={item.title}
          startContent={item.startContent}
        >
          {item.title}
        </SelectItem>
      ))}
    </Select>
  )
}

export default FoldersSelect;
