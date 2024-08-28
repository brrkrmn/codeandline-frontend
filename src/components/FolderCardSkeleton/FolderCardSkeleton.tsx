import { Skeleton } from '@nextui-org/react';
import React from 'react';

const FolderCardSkeleton = () => {
  return (
    <div className="flex flex-col w-[350px] h-[140px] p-4 grow-0 shrink-0 border-1 rounded-xl border-1 border-border shadow-small">
      <Skeleton
        className="h-8 rounded-xl text-primary-light line-clamp-1"
        classNames={{
          base: [
            "dark:bg-content1",
          ]}}
      ></Skeleton>
      <Skeleton
        className="h-6 mt-2 rounded-xl"
        classNames={{
          base: [
            "dark:bg-content1",
          ]}}
      >
      </Skeleton>
      <div className="mt-auto flex justify-between items-center">
        <Skeleton
          className="h-6 w-8 rounded-xl"
          classNames={{
            base: [
              "dark:bg-content1",
            ]}}
        >
        </Skeleton>
        <Skeleton
          className="h-6 w-20 rounded-xl"
          classNames={{
            base: [
              "dark:bg-content1",
            ]}}
        >
        </Skeleton>
      </div>
    </div>
  )
}

export default FolderCardSkeleton;

