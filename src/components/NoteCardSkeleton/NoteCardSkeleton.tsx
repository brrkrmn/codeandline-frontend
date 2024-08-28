import { Skeleton } from '@nextui-org/react';
import React from 'react';

const NoteCardSkeleton = () => {
  return (
    <div className="flex flex-col p-2 grow-0 shrink-0 w-[240px] wide:w-[280px] h-[314px] rounded-xl border-1 border-border shadow-small">
      <Skeleton
        className="rounded-xl w-full h-[180px]"
        classNames={{
          base: [
            "dark:bg-content1",
            "border-1 border-divider"
          ]}}
      ></Skeleton>
      <Skeleton
        className="mt-4 h-10 rounded-xl"
        classNames={{
          base: [
            "dark:bg-content1",
          ]}}
      ></Skeleton>
      <Skeleton
        className="mt-2 h-8 rounded-xl"
        classNames={{
          base: [
            "dark:bg-content1",
          ]}}
      ></Skeleton>
    </div>
  )
}

export default NoteCardSkeleton;
