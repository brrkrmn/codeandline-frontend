import CreateCard from "../../components/CreateCard/CreateCard";
import { cardTypes } from "../../components/CreateCard/constants";

const Create = () => {
  return (
    <div className="w-full h-[70vh] flex flex-col laptop:flex-row items-center justify-center gap-10">
      <CreateCard type={cardTypes.note} />
      <CreateCard type={cardTypes.folder} />
    </div>
  )
}

export default Create;