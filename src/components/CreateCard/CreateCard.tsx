import { Divider } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { H2 } from '../Typography';
import { cardProps } from './constants';

type ComponentProps = {
  type: "folder" | "note"
}

const CreateCard = ({ type }: ComponentProps) => {
  return (
    <Link to={cardProps[type].path} className="group border-1 bg-background border-divider shadow-small aspect-[6/2] h-[150px] w-auto rounded-xl px-8 py-4 transition hover:drop-shadow-md hover:border-primary-dark flex items-center justify-start gap-8">
      <span className="*:text-[40px] transition *:text-primary-dark group-hover:*:text-primary-light">
        {cardProps[type].icon}
      </span>
      <Divider orientation='vertical' />
      <H2 className="font-normal text-primary-light text-[28px] overflow-hidden text-nowrap">
        {cardProps[type].title}
      </H2>
    </Link>
  )
}

export default CreateCard;
