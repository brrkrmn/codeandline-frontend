import { ScrollShadow } from '@nextui-org/react';
import React from 'react';
import { folderList } from '../../constants/notes';
import FolderCard from '../FolderCard';
import { H5 } from '../Typography';

const Folders = () => {
  return (
    <div>
      <H5 className="text-foreground-primary font-thin mb-4">Folders</H5>
      <ScrollShadow
        orientation="horizontal"
        className="flex justify-start items-center gap-4"
      >
        {folderList.map(folder => (
          <FolderCard folder={folder} />
        ))}
      </ScrollShadow>
    </div>
  )
}

export default Folders;
