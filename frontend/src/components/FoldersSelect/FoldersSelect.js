import { Select, SelectItem, SelectSection } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../../assets/icons';
import { getUserFolders } from '../../reducers/foldersReducer';

const FoldersSelect = ({ id, name, onChange, onBlur, value, data }) => {
  const dispatch = useDispatch();
  const [folders, setFolders] = useState();

  useEffect(() => {
    if (!data) {
      dispatch(getUserFolders())
    }
  }, [])

  const userFolders = useSelector((state) => state.folders)

  useEffect(() => {
    if (data) {
      setFolders(data)
    }
    if (userFolders.length > 0) {
      setFolders(userFolders)
    }
  }, [userFolders])

  if (folders) {
    return (
      <Select
        id={id}
        name={name}
        onChange={onChange}
        defaultSelectedKeys={[""]}
        disallowEmptySelection={true}
        onBlur={onBlur}
        variant="bordered"
        size='md'
        radius='sm'
        label='Folder'
        className="w-[14%] ml-3 mt-4 text-foreground-dark"
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
          label: [
            "font-thin"
          ],
          value: [
            "text-primary-light"
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
          <SelectItem
            key={""}
            value={""}
            title="None"
          />
        </SelectSection>
        {folders.map(item => (
          <SelectItem
            key={item.id}
            value={item.id}
            title={item.title}
          />
        ))}
      </Select>
    )
  }
}

export default FoldersSelect;
